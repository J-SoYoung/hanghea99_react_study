import { useState } from 'react';
import './Todo.css';

// 리덕스 툴킷 적용 TODO
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, delTodo, doneTodo } from './redux/modules/todosSlice';




function Todo() {
  const dispatch = useDispatch();
  const todo = useSelector((state)=> state.todoReducer.todos)
  // state.todos.todos => 전체state 안에서 
  // configStore에 연결된 todoReducer(모듈이름 key값)안에서
  // 리듀서 안에 initialState 이름

  console.log(todo)
  const [ title, setTitle ]= useState();
  const [ text, setText ]= useState();


  const addTodoBtn = () => {
    let newList ={
      id : new Date().getTime() + Math.random() ,
      title : title,
      text : text,
      done : false,
      edit : false,
    }
    console.log(newList)
    dispatch(addTodo(newList))
    setTitle("")
    setText("")
  }

  // data삭제
  const deleteBtn= (id) => {
    dispatch(delTodo(id))
  } 

  const doneBtn = (id) =>{
    dispatch(doneTodo(id))
  }


  return (
  <>
    <div className='App'>
      <div className='nav'>
        <div className='nav_contain'>
          <p className='nav_title_L'>MY TO DO LIST</p>
          <p className='nav_title_R'>REACT</p>
        </div>
      </div>

      <div className='contain'>
        <div className='input_contain'>
          <div className='input_topic input_box'>
            <span>제목</span>
            <input 
              value={title || ""}
              onChange={(e)=>{setTitle(e.target.value)}}
              type={'text'} placeholder='오늘의 할일'
            />
          </div>
          <div className='input_text input_box'>
            <span>내용</span>
            <textarea 
              value={text || ""}
              onChange={(e)=>{setText(e.target.value)}}
              type={'text'} placeholder='내용을 작성해주세요'
            />
          </div>
          <button onClick={addTodoBtn}>Add TO DO</button>
        </div>
      </div>

      <div className='contain'>
        <div className='todo_list_box list_box'>
          <h1 className='list_title'>오늘의 할 일</h1>
          <div className='card_box'>
            {todo.map((item)=>{
              if(!item.done){
                return (
                  <div key={item.id} className='todo card'>
                    <h3>{item.title}</h3>
                      <>
                        <p>{item.text}</p> 
                        <div className='btn_box'>
                          <button onClick={()=>{deleteBtn(item.id)}}>삭제</button>
                          <button onClick={()=>{doneBtn(item.id)}}>완료</button> 
                        </div>
                      </>
                  </div>
                )
              }
            })}
          </div>

          {/* done list , todo 완성되면 마저 바꾸기*/} 
          <h1 className='list_title'>DONE</h1>
          <div className='card_box'>
            {todo.map((item)=>{
              if(item.done){
                return (
                  <div key={item.id} className='todo card'>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p> 
                    <div className='btn_box'>
                      <button onClick={()=>{deleteBtn(item.id)}}>삭제</button>
                      <button onClick={()=>{doneBtn(item.id)}}>취소</button> 
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  </> 
  )
}
export default Todo;
