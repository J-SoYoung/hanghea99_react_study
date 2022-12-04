import { useState } from 'react';

import './App.css';


// function todo 

function App() {
  // input에 넣은 todo의 내용들
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  // todo리스트의 내용들
  const [list, setList] = useState([
    {
      id : 1,
      title: '리액트 공부',
      text: '자바스크립트가 이렇게나 어렵다니!',
      done: false,
    },
    {
      id : 2,
      title: '리액트 숙제',
      text: '완성시켜보자',
      done: false,
    },
  ])
  console.log(title, text, list)
  // done 내용 
  const [done, setDone] = useState(false)

  // input값을 넣고 버튼 => state에 저장돼 있던 data가
  // 아래 객체에 들어가면서 새로운 todo를 동적으로 생성함
  const addTodoBtn=()=>{
    const newTodo = {
      id : list.length + 1,
      title : title,
      text : text,
      done : done,
    }
    // list에 새로운 todo와 쌓여있는 todo가 저장됨.
    setList([newTodo, ...list])
    setTitle('')
    setText('')
  }
  // deleteBtn에서 item을 보내주는데 그 안에서 {id}만 챙김
  const deleteBtn= ({id})=>{
    // console.log(id)
    const delList =list.filter((t)=> 
    // console.log( t.todo_id === id)
    t.todo_id === id
    // return t.todo_id === id 하지 않는 이유? 변수에 넣어서그런가

    )
  //   // console.log(delList)
    setList(delList) //무한루프가 도는 이유는?
  }

  const doneBtn= ()=>{
    //done의 T.F값에 따라 viwe 있는 곳이 달라짐
    setDone(done? true : false )
    console.log('끝냄')
  }

  return (
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
              value={title}
              // 얘는 무슨함수? 이름이...
              // input이벤트로 들어온 입력 값을 title값으로 업데이트
              onChange={(e)=>{setTitle(e.target.value)}}
              type={'text'} placeholder='오늘의 할일'
            />
          </div>
          <div className='input_text input_box'>
            <span>내용</span>
            <textarea 
              value={text}
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
          {/* {list.map((item, idx)=>(
            // console.log(item)
            <div id={idx} className='todo card'>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div>
                <button onClick={deleteBtn(item)}>삭제</button>
                <button onClick={doneBtn} done='false'>완료</button>
              </div>
            </div>
          ))} */}
          </div>
        </div>
        {/* <div className='done_list_box list_box'>
          <h1 className='list_title'>Done</h1>
          <div className='card_box'>
            <div className='done card'>
              <h3>리액트 숙제하기</h3>
              <p>리액트 주차 숙제를 완성하자!!!!</p>
              <div>
                <button>삭제</button>
                <button>취소</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    )
}

export default App;
