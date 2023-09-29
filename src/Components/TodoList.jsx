import React from "react";

function TodoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <span><i className="fa-solid fa-trash" onClick={e=>{
        props.deleteItem(props.index)
      }}></i></span>
    </li>
  )
}

export default TodoList