import React, { useState } from 'react';
import "./App.css";
import TodoList from './Components/TodoList';
import { Todoinput } from './Components/Todoinput';

function App() {
  const [listTodo, setListTodo]= useState([]);
  let addList = (inputText)=>{
    if (inputText!=='')
    setListTodo([...listTodo , inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
    <Todoinput addList = {addList}/>
    
    <h1>To Do</h1>
    <hr/>
    {listTodo.map((listItem , i)=>{
      return (
        <TodoList key={i} index= {i} item={listItem} deleteItem = {deleteListItem}/>
      )
    })}
      </div>
    </div>
  )
}

export default App