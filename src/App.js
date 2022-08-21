import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ToDoLists from "./ToDoLists";

function App() {
  const [inputList,setInputList]=useState();
  const [Items,setItems]=useState([]);
 const itemEvent=(e)=>{
      // console.log(e.target.value);
      setInputList(e.target.value);
 }
 const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    }); 
    setInputList(""); 
 }
 const deleteItems=(id)=>{
  setItems((oldItems)=>{
    return oldItems.filter((arrElem,index)=>{
      return index !== id;
    })
  })
}
  return (
    <div className="main-div">
      <div className="center-div">
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add Items" onChange={itemEvent} value={inputList}/>
        <button onClick={listOfItems}>+</button>
        <br />
        <ol>
          {/* <li>{inputList}</li> */}
          {
            Items.map((itemval,index)=>{
              return <ToDoLists
               text={itemval}
                key={index}
                id={index}
                onSelect={deleteItems}
               />;
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
