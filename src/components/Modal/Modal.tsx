import React, { useState } from "react";
import "./Modal.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut    } from 'firebase/auth';
import { auth } from "../../firebase.config.js";
import useLocalStorage from "use-local-storage";

export default function Modal() {
  const [modal, setModal] = useState(false)

  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
 
  const [user, setUser] = React.useState(null);

  const [userStatus, setUserStatus] = useLocalStorage("userStatus", 0);


  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

 //Login
 const login = async () => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password) as any;
    console.log(user);
    setEmail(email)
    setUserStatus(1);
    setUser(user);
  } catch (error) {
    console.log(email, password);
    console.log(error);
  }
};

//Login
const handleSubmitSingin = (event: any) => {
  // Prevent page reload
  event.preventDefault();

  login();
  toggleModal();
};

//Create Account
const createAccount = async () => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password) as any;

    console.log(user);
    setEmail(email)
    setUserStatus(1);
    setUser(user);
  } catch (error) {
    console.log(error);
  }
};	

//Create Account
const handleSubmitCreateAccount = (event: any) => {
  // Prevent page reload
  event.preventDefault();

  createAccount();
  toggleModal();
};

const handleLogout = async () => {
  await signOut(auth);
  setUserStatus(0);
  setUser(null);
};


  return (
    <>
      

   
     {userStatus === 1 ?
          <div className="userStatus">
         {user && <div>{email}</div>}
         {user && <button onClick={handleLogout}id="btn-modal">logout</button>}
         </div>
      :
      <button onClick={toggleModal} id="btn-modal">
      entrar
    </button>
      }
     
     

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="close-modal-position">
              <button id="closeModalBnt" onClick={toggleModal}>
                close
              </button>
            </div>

            <h2 className="loginTitle">Sign in</h2>
            <h3 className="loginSubtitle">to access your list</h3>
            <form className="login">
              <label className="loginLabel">Email</label>
              <input
                type="text"
                placeholder="Username"
                className="loginInput"
                autoComplete="username"
                id="inputLogin"
                onChange={(e) => setEmail(e.target.value)}
               // value={email}
              />
              <label className="loginLabel">Password</label>
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                id="inputPassword"
                onChange={(e) => setPassword(e.target.value)}
                //value={pass}

              />
              <div className="loginButtonPosition">
              <button className="loginButton" onClick={handleSubmitCreateAccount}>
                Create Account
                </button>
                <button className="loginButton" onClick={handleSubmitSingin}>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
