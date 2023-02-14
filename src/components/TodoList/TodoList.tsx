//import logo from "../../assets/Logo.png";
import { useState, useRef, useEffect } from "react";
import "./TodoList.css";
import "./draganddrop.css";


function ToDo({ data } : any ) {

  const [list, setList] = useState(data); 
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
      setList(data);
  }, [setList, data])

  

  const dragItem = useRef() as any;
  const dragItemNode = useRef() as any;
  
  const handletDragStart = (e: any, item: any) => {
      console.log('Starting to drag', item)

      dragItemNode.current = e.target;
      dragItemNode.current.addEventListener('dragend', handleDragEnd)
      dragItem.current = item;

      setTimeout(() => {
          setDragging(true); 
      },0)       
  }
  const handleDragEnter = (e: any, targetItem: any) => {
      //console.log( "atual-->", dragItemNode.current , 'to--->', e.target, (dragItemNode.current !== e.target))
      if (dragItemNode.current !== e.target) {
          //console.log('Target is NOT the same as dragged item')
          const newList = JSON.parse(JSON.stringify(list))
          newList[targetItem.grpI].items.splice(targetItem.itemI, 0, newList[dragItem.current.grpI].items.splice(dragItem.current.itemI,1)[0])
          dragItem.current = targetItem;
          localStorage.setItem('List', JSON.stringify(newList));
          setList(newList);
      }
  }
  const handleDragEnd = (e: any) => {
      console.log('Ending drag')
      setDragging(false);
      dragItem.current = null;
      dragItemNode.current.removeEventListener('dragend', handleDragEnd)
      dragItemNode.current = null;
  }

  const handleEdit = (e: any, item: any) => {
      console.log('Editing', item, e.target.value)
      const newList = JSON.parse(JSON.stringify(list))
      newList[item.grpI].items[item.itemI].text = e.target.value;
      localStorage.setItem('List', JSON.stringify(newList));
      setList(newList);
  }

  const handleCheck = (e: any, item: any) => {
      console.log('Editing', item, e.target.value)
      const newList = JSON.parse(JSON.stringify(list))
      console.log(newList[item.grpI].items[item.itemI].checked)

      if (newList[item.grpI].items[item.itemI].checked === false) {
          newList[item.grpI].items[item.itemI].checked = true;
          
      } else {
          newList[item.grpI].items[item.itemI].checked = false;
      }
      localStorage.setItem('List', JSON.stringify(newList));
      setList(newList);
      console.log('new is ', newList[item.grpI].items[item.itemI].checked)
  }


  const handleRemove = (e: any, item: any) => {
      console.log('Removing', item)
      setList((oldList: any) => {
          let newList = JSON.parse(JSON.stringify(oldList))
          newList[item.grpI].items.splice(item.itemI, 1);
          localStorage.setItem('List', JSON.stringify(newList));
          return newList
      })
  }

  //Adicionar item
  const addItem = (e:any) => {

      e.preventDefault();
      const newList = JSON.parse(JSON.stringify(list))
      newList[0].items.push({text: "", checked: false})
      localStorage.setItem('List', JSON.stringify(newList));
      setList(newList);

      
    }

  const getStyles = (item: any) => {
      if (dragItem.current.grpI === item.grpI && dragItem.current.itemI === item.itemI) {
          return "dnd-item current"
      }
      return "dnd-item"
  }

  if (list) {
    return (
      <section id="ToDoScreen">
        <div id="title">
          <div id="BG2Limit">
            <div id="BG2"></div>
          </div>
          <h2 id="ToDoTitle">To-do List</h2>
          <div id="line1"></div>
          <h3 id="subtitle">
            Drag and drop to set your main priorities, check when done and
            create what´s new.
          </h3>
        </div>

        <div className="ToDos">
          <div className="ToDoLeft">
            <div className="ToDoLeftContent">
              <h3>To-do</h3>
              <h4>Take a breath.</h4>
              <h4>Start doing.</h4>
              <div className="space" />



              <div className="drag-n-drop">
                <div
                  className="dnd-group"
                  onDragEnter={()=>{
                    dragging && !list[0].items.length
                      ? (e: any) => handleDragEnter(e, { grpI: 0, itemI: 0 })
                      : null
                  }}
                >
                  {list[0].items.map((a:any, i: any) => (
                    <div
                       draggable
                      onDragStart={(e) =>
                        handletDragStart(e, { grpI: 0, itemI: i })
                      }
                      onDragEnter={()=>{
                        dragging
                          ? (e: any) => handleDragEnter(e, { grpI: 0, itemI: i })
                          : null
                      }}
                      key={i}
                      className={
                        dragging ? getStyles({ grpI: 0, itemI: i }) : "dnd-item"
                      }
                      id={
                        dragging ? getStyles({ grpI: 0, itemI: i }) : "dnd-item"
                      }
                    >
                      <input
                        type="checkbox"
                        className="checkbox"
                        id={ "0" + i }
                        
                        value={list[0].items[i].checked}
                        onChange={(e) => handleCheck(e, { grpI: 0, itemI: i })}
                        //checked={list[0].items[i].checked ? "checked" : ""}
                      />
                      <label htmlFor={ "0" + i }/>
                      {<input
                        type="text"
                        id={"task0"+ i}
                      //  multiline = {list[0].items[i].text}
                        
                        value={list[0].items[i].text}
                        onChange={(e) => handleEdit(e, { grpI: 0, itemI: i })}
                      />}
                      

                      {/*console.log(a.text)*/}

                      <button
                        id={"delete0" + i}
                        
                        onClick={(e) => {
                          handleRemove(e, { grpI: 0, itemI: i });
                        }}
                      >
                        delete
                      </button>
                    </div>
                  ))}
                              <form>
                  <button id="add" onClick={ (e) => addItem(e)}>+</button>
                  </form>
                </div>
              </div>

              <button
              className="eraseBnt"
              onClick={(e) => {
                e.preventDefault()
                setList((oldList: any) => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[0].items = []
                localStorage.setItem('List', JSON.stringify(newList));
                return newList
                })
                }}>erase all</button>
            </div>
          </div>

          <div className="ToDoRight">
            <div className="ToDoRightContent">
              <h3>Done</h3>
              <h4>Congratulions!</h4>
              <h4>
                <strong>You have done {list[1].length} tasks</strong>
              </h4>
              <div className="space" />




              <div className="drag-n-drop">
                <div
                  className="dnd-group"
                  onDragEnter={(e)=>{
                    dragging && !list[1].items.length
                      ? handleDragEnter(e, { grpI: 1, itemI: 0 })
                      : null
                  }}
                >
                  {list[1].items.map((a: any, i: any) => (
                    <div
                      draggable
                      onDragStart={(e) =>
                        handletDragStart(e, { grpI: 1, itemI: i })
                      }
                      onDragEnter={(e)=>{
                        dragging
                          ?   handleDragEnter(e, { grpI: 1, itemI: i })
                          : null
                      }}
                      key={i}
                      className={
                        dragging ? getStyles({ grpI: 1, itemI: i }) : "dnd-item"
                      }
                      id={
                        dragging ? getStyles({ grpI: 1, itemI: i }) : "dnd-item"
                      }
                    >
                      <input
                        type="checkbox"
                        className="checkboxDone"
                        id={ "1" + i }
                        
                        //value={true}
                        onChange={(e) => handleCheck(e, { grpI: 1, itemI: i })}
                        checked
                      />
                      <label id={ "1" + i }/>
                      {<input
                        type="text"
                        id={"task1" + i}
                        //multiline = {list[1].items[i].text}
                        
                        value={list[1].items[i].text}
                        onChange={(e) => handleEdit(e, { grpI: 1, itemI: i })}
                      />}
                      

                      {/*console.log(a.text)*/}

                      <button
                        id={"delete1" + i}
                        
                        onClick={(e) => {
                          handleRemove(e, { grpI: 1, itemI: i });
                        }}
                      >
                        delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>





              <button
              id="eraseBntRight"
              className="eraseBnt"
              onClick={(e) => {
                e.preventDefault()
                setList((oldList: any) => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[1].items = []
                localStorage.setItem('List', JSON.stringify(newList));
                return newList
                })
                }}>erase all</button>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}

export default ToDo;
