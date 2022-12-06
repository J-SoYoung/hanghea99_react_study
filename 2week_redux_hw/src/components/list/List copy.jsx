import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { delTodo, doneTodo, editTodo } from "../../redux/modules/todos";

const List = ()=>{
  const dispatch = useDispatch()  
  const todoList = useSelector((state)=> state.todos.todos);
  // console.log(todoList)


  const deleteBtn = (id) =>{
    console.log('삭제',id)
    dispatch(delTodo(id))
    // setState로 했던 기능을 delTodo로 넘김
    // const newList=todoList.filter((l)=>{return l.id !== id;});
    // setTodoList(newList);
  }
  const doneBtn = (id)=>{
    dispatch(doneTodo(id)) 
    // console.log('done',id)
    // const doneUser = [...todoList];
    // const index = doneUser.findIndex((v) => v.id === id);
    // doneUser[index].is_done = !doneUser[index].is_done;
    // setTodoList(doneUser);
  }


  return (
    <> 
      <div>
        <h1 className='list_title'>오늘의 할 일</h1>
        <div className='todo_card_box'>  
        {todoList
          ?.filter((t)=> t.is_done === false)
          ?.map((l)=> { 
            return <div key={l.id} className='todo_card'>
              <p className='todo_title'>{l.title}</p>
              <p>{l.content}</p>
              <div>
                <button onClick={()=>{deleteBtn(l.id)}}>삭제</button>
                <button onClick={()=>{doneBtn(l.id)}}>완료</button>
              </div>
            </div>
          })}
        </div>
      </div>



      <div>
        <h1 className='list_title'>DONE</h1>
        <div className='todo_card_box'>
        {todoList
          ?.filter((t)=> t.is_done === true)
          ?.map((l)=> { 
            return <div key={l.id} className='todo_card'>
              <p className='todo_title'>{l.title}</p>
              <p>{l.content}</p>
              <div>
                <button onClick={()=>{deleteBtn(l.id)}}>삭제</button>
                <button onClick={()=>{doneBtn(l.id)}}>취소</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
    )
  }


export default List;

    // 한번에 안되는건가...
    // <> 
    //   <div>
    //     <h1 className='list_title'>오늘의 할 일</h1>
    //     <div className='todo_card_box'>  
    //     {/* 여기에 is_done = false인거 ../ */}
    //     </div>
    //   </div>

    //   <div>
    //     <h1 className='list_title'>DONE</h1>
    //     <div className='todo_card_box'>
    //     {/* 여기에 is_done = true인거../ */}
    //     </div>
    //   </div>
    // </>