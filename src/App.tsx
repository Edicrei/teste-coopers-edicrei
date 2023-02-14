import { useEffect, useState  } from "react"
import "./App.css";
import "./assets/fonts.css"


import Home from "./components/Home/Home"
import TodoList from "./components/TodoList/TodoList"
import Carousel from "./components/Carousel/Carousel"
import ContactForm from "./components/ContactForm/ContactForm";


const defaultData = [
  {title: 'Grupo 1', items: [{text:'this is a new task', checked: false} , {text:'Develop the To-do list page', checked: true}, {text:'Create the drag-and-drop function', checked: true},{text:'Add new tasks', checked: true},{text:'Delete itens', checked: true}, {text:'Erase all', checked: true}, {text:'Checked item goes to Done list', checked: true}, {text:'This item label may be edited', checked: true}]},
  {title: 'Grupo 2', items: [ {text:'Get FTP credentials', checked: true},{text:'Home Page Design', checked: false} ,{text:'E-mail John about the deadline', checked: false} , {text:'Create a Google Drive Folder', checked: false} , {text:'Send a gift to the client', checked: false} ,]}
]


function App() {
  const [data, setData] = useState() as any;  
  const d = new Date();
  let year = d.getFullYear();

  useEffect(() => {
    
    if (localStorage.getItem('List')) {
      console.log(localStorage.getItem('List'))
      setData(JSON.parse(localStorage.getItem('List') as string))
    } else {
      setData(defaultData)
    }
    //setData(defaultData)
  }, [setData])
  
  /*useEffect(()=>{
    setData(defaultData)
  },[])*/

  return (
    <div className="App">
      <div className="scroll-container">
        <Home/>


        <TodoList data={data}/>
        <Carousel/>

       <ContactForm/>

        <div id="lineBG"/>
        <footer className="scroll-area">
          <h3>Need help?</h3>
          <h4>coopers@coopers.pro</h4>
          <h5>© {year} Coopers. All rights reserved.</h5>
          <div id="end" />
        </footer>
      </div>
    </div>
  );
}

export default App;
