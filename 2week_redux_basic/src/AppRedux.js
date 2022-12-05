import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// component, file import
import './App.css'
import TodoForm from "./components/TodoForm/TodoForm";
import TodoBox from "./components/TodoBox/TodoBox";
// redux action function
import { addTodo } from "./redux/modules/todos";



function AppRedux() {
  
  return (
    <div className="App">
      <h1>리덕스를 배워봅시다</h1>
      <div className='todo_input_box'>
        <h1>TO DO LIST</h1>
        <TodoForm />
        <div className="todo_List_box">
          <TodoBox />
        </div>
      </div>
    </div>
  );
}

export default AppRedux;



