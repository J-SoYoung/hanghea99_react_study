import React, { useState } from "react";
import './App.css'

// 컴포넌트
import TodoForm from "./components/TodoForm/TodoForm";
import TodoBox from "./components/TodoBox/TodoBox";
import { useDispatch, useSelector } from "react-redux";



function AppState() {
  // 리덕스를 사용하게 되면, 
  // state로 데이터 관리 적어지고 + props로 안넘겨줘도 됌
  // WOW. 해당 데이터 처리는 해당 컴포넌트에서 할 수 있게 됐다. 굳
  // input-onChange : Form컴포넌트에서 onChange, state관리가능
  // todolist : useSelector로 store에서 해당 state가져와서 사용함. 
  // props의 대량 이동이 줄어듦. 좋아.
  const [todoInput, setTodoInput] = useState('')
  const [todoList, setTodoList] = useState([
    { id: new Date().getTime(), todo : '안녕 Todo1' },
    { id: new Date().getTime(), todo : '안녕 Todo2' },
  ])
  
  // useSelect로 state에 있는 데이터를 가져옴 
  // =>=>=> 해당 컴포넌트서 바로 사용 = props로 넘겨줄 필요가없음
  // const todoList = useSelector((state)=>state.todos.todos)
  // console.log(todoList)
  
  const dispatch = useDispatch()
  
  // todo 추가했을 때 일어나는 일들
  const todoAdd =(e)=>{
    e.preventDefault()

    if(!todoInput){ alert('투두를 작성해주세요') } 
    else {
    // 리덕스를 사용하게 되면 useState로 데이터 관리X
    // // 새todo, state로 관리하는 input 가져욤
    // // [새todo + ...기존todolist]
    const newTodo = { id: new Date().getTime(), todo : todoInput }
    
    // 리스트를 추가하는 것도 
    // dispatch로 reducer에게 action함수를 보내서 실행함
    setTodoList([newTodo, ...todoList])

    setTodoInput('')
    }
  } 
  // console.log(todoList)



  return (
    <div className="App">
      <h1>리덕스를 배워봅시다</h1>
      <div className='todo_input_box'>
        <h1>TO DO LIST</h1>
        {/* 여기도 마찬가지, 
        Form컴포넌트에서 state로 input받아서, 
        dispatch를 통해 action(함수)을 리듀서로 보낸다.
        store에 있는 state를 가지고
        리듀서가 함수를 실행해서 데이터가 추가됨 */}
        <TodoForm 
          todoInput={todoInput} 
          setTodoInput={setTodoInput}
          todoAdd={todoAdd}/>

        <div className="todo_List_box">
          {/* useState로 관리하게 되면 props로 값을 넘겨줘야 하지만
          redux(store)가 관리하는 module은 useSelector로 어디서든
          꺼내서 사용할 수 있으니, props로 안넘겨줘도 됨. */}
          <TodoBox todoList={todoList}/>
        </div>
      </div>
    </div>
  );
}

export default AppState;



