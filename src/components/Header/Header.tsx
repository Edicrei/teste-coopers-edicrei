import logo from "../../assets/Logo.png";
import "./Header.css";
import Modal from '../Modal/Modal'

function Header() {


  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo da Coopers" />
   
        <div className="userStatus">
         <Modal />
        </div>
        
      
    </header>
  );
}

export default Header;
