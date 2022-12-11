import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../src/redux/modules/md_todo';
import './App_exam.css'
// react 기초 text

function AppExam() {
  const [title, setTitle] = useState()
  // list관리가 state로 넘어간거고. => 얘내느 피료없음./
  // const [todoList, setTodoList] = useState([
  //   { title : 'default' },
  // ])
  const dispatch = useDispatch()
  const todoList = useSelector((state)=> state.md_todo.todos)
  console.log(todoList)


  const todoAdd =(e)=>{
    e.preventDefault()
    // 버튼 -> 리스트 생성 , redux관리
    // let newTodo = { title : todo }
    // setTodoList([newTodo, ...todoList])
    // setTodo("")
    
    // redux안에 있는 addTodo함수를 실행해라
    // 무엇을 redux로 넘길것인지! (id까지 만들기)
    dispatch(addTodo({
      id: todoList.length + 1,
      title,
    }))
  }
  // if(todoList){
  //   console.log(todoList)
  // }

  return (
    <div className="App">
      <h1>TO DO LIST</h1>

      <form className='input_box'>
        <input
          type='text'
          onChange={(e)=>setTitle(e.target.value)}
          value={title|| ""}
          placeholder='오늘의 할일을 입력해주세요'
        />
        <button type='submit' onClick={todoAdd}>추가</button>
      </form>

      <div className='todo_box'>
        {todoList.map((l, idx)=>{
          console.log(l)
          return (
            <div key={idx}>{l.title}</div>
          )
        })}
        
      </div>
    </div>
  );
}

export default AppExam;
