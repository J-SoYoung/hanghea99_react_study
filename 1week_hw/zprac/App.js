import { useState } from 'react';
import './App.css';




function App() {
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
    // console.log('추가')
    // console.log(new Date().getTime() + Math.random())
    // id => list.length : 기존data를 지웠을 경우, length 기준이라 id겹침 현상이 발생 
    // 유일한 값으로 바꿈 : random + today 밀리초
    let newList ={
      // id : list.length +1 ,
      id : new Date().getTime() + Math.random() ,
      title : title,
      text : text,
      done : false
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
  // data수정 (done -> T/F)
  // id가져와서 맞으면 바꿔..아 음..음?
  // 삭제는 true 것들만 배열로 반환해라 => list에 filter결과 출력 => 삭제됨
  // todo 내용을 고쳐라 => filter결과랑 + 기존list => 기존것만 수정
  // 안되는데 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
  const doneBtn = (_id, done, idx) =>{
    // 확인해보기.
    const doneUser = [...list ] 
    doneUser[idx].done = !doneUser[idx].done
    setList(doneUser) 
  }

  const editBtn = (_id,idx) =>{
    const doneUser = [...list ] 
    // 수정버튼 state에 = edit추가 : 있니없니, list에 추가하고
    // edit이 있으면 수정할 수 있는 인풋이 뜬다
    // => 삼항연사자 : 기본 p태그 or input창을 넣는다 

    // 개발할 때 미리 리스트업, 구현해야 할 것을 적어놓는다. 팁이다!!
    console.log(_id, '수정하기')
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
          {/* todo list */}
          {/* 이것도 중간에 title이 있어서 return값으로 한번에 T.F 렌더링 하고싶었는데 */}
          {/* 컴포넌트 나눠보기 => props로 뭘 넘겨야할지 생각해보기  */}
          <h1 className='list_title'>오늘의 할 일</h1>
            <div className='card_box'>
            {list.map((item,idx)=>{
              if(!item.done){
                return (
                  <div key={idx} className='todo card'>
                    <h3>{item.title}</h3>
                    {/* 삼항연산자 text / if */}
                    <p>{item.text}</p> 
                    <div className='btn_box'>
                      <button onClick={()=>{deleteBtn(item.id)}}>삭제</button>
                      <button onClick={()=>{editBtn(item.id, idx)}}>수정</button>
                      <button onClick={()=>{doneBtn(item.id, item.done, idx)}}>완료</button> 
                    </div>
                </div>
                )
              }
            })}

          </div>
          {/* done list */}
          <h1 className='list_title'>DONE</h1>
          <div className='card_box'>

            {list.map((item,idx) => {
              if((item.done)){
                return (
                  <div key={idx} className='todo card'>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className='btn_box'>
                      <button onClick={()=>{deleteBtn(item.id)}}>삭제</button>
                      <button onClick={()=>{editBtn(item.id, idx)}}>수정</button>
                      <button onClick={()=>{doneBtn(item.id, item.done, idx)}}>취소</button> 
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
export default App;
