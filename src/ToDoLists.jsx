import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div className="todo-style">
        <i class="fa-solid fa-xmark" 
        onClick={()=>{
            props.onSelect(props.id);
        }}></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default ToDoLists;
