import { useState } from 'react';
import './Todo.css';
// 리덕스 구현 안한 투두 후후후



function Todo() {
  const [ title, setTitle ]= useState();
  const [ text, setText ]= useState();
  // const [ done, setDone ]= useState(false);  // 전체 doㅜㄷdlek 
  const [ list, setList ]= useState([
    { 
    id : 1,
    title : '자바스크립트가..',
    text : '자바스크립트가 이렇게나 어렵다니!',
    done : false
    },
    { 
    id : 2,
    title : '리액트 화이팅 ',
    text : '와오늘은 진짜 대방 졸리다',
    done : false
    },
  ]);

  const addTodoBtn = () => {
    let newList ={
      id : new Date().getTime() + Math.random() ,
      title : title,
      text : text,
      done : false,
      edit : false,
    }
    console.log(newList)
    setList([newList, ...list])
    setTitle("")
    setText("")
    console.log(list)
  }

  // data삭제
  const deleteBtn= (_id) => {
    console.log(_id)
    const newUserList = list.filter((l) => {return ( l.id !== _id )})
    setList(newUserList)
  } 

  const doneBtn = (_id, idx) =>{
    const doneUser = [...list ]
    doneUser[idx].done = !doneUser[idx].done
    setList(doneUser) 
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
            // 에러가 나는 이유는 뭐였을ㄲㅏ?
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
            {list.map((item,idx)=>{
              if(!item.done){
                return (
                  <div key={idx} className='todo card'>
                    <h3>{item.title}</h3>
                      <>
                        <p>{item.text}</p> 
                        <div className='btn_box'>
                          <button onClick={()=>{deleteBtn(item.id)}}>삭제</button>
                          <button onClick={()=>{doneBtn(item.id, idx)}}>완료</button> 
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
            {list.map((item,idx)=>{
              if(item.done){
                return (
                  <div key={idx} className='todo card'>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p> 
                    <div className='btn_box'>
                      <button onClick={()=>{deleteBtn(item.id)}}>삭제</button>
                      <button onClick={()=>{doneBtn(item.id, idx)}}>취소</button> 
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
