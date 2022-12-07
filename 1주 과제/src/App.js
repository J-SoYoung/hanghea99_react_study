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
  // data수정 (done -> T/F)
  // id가져와서 맞으면 바꿔..아 음..음?
  // 삭제는 true 것들만 배열로 반환해라 => list에 filter결과 출력 => 삭제됨
  // todo 내용을 고쳐라 => filter결과랑 + 기존list => 기존것만 수정
  // 안되는데 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

  const doneBtn = (_id, idx) =>{
    const doneUser = [...list ]
    doneUser[idx].done = !doneUser[idx].done
    setList(doneUser) 
  }

  // 수정버튼
  const editBtn = (_id, idx) =>{
  // 개발할 때 미리 리스트업, 구현해야 할 것을 적어놓는다.
  // text에 원래 쓰여있던 값 어케 보여주지?

    const editUser = [...list ] 
    // edit상태 변경
    editUser[idx].edit = !editUser[idx].edit
    // text상태 변경
    const editText = editUser.filter((l,idx)=>{
      // console.log(l.text) state에 있는 list
      // console.log(editUser[idx].text) 수정 누른 text
      // 같지 않으면 새로 입력한 값으로 바꿔. 
      // 새로 입력한 값은 어디에?? 있지?? ㅇㅅㅇ.. ㅎㄷㄷ...ㅎㄹㄹ..
      if (l.text !== editUser[idx].text){
        return 
      }  
    })

    setList(editUser) 
    // doneUser.filter((l,idx) => {
    //   console.log(l,idx)
    //   setList(doneUser) 
    // })
    
  }

  // t/f 함수만드렁야함
  // 인풋값 상태를 만들어.. uiseState... ?dma. 네 
  // 아, 취소하면 데이터 ..살려줘야함. 
  // 아. 네 생각.


  // 수정완료 버튼 
  const editEndBtn = (_id, done, idx) =>{
    // 수정이 끝나면 수정완료 -> 어떤기능?
    // 인풋 내용 다시 받아서 setList에 저장 -> 다시 보여주기
    // 버튼 3개로 다시 edit : true ( 삭제, 수정, 완료 )
    const doneUser = [...list ] 
    doneUser[idx].done = false
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
                    {/* edit? -> 수정할input, 수정btn or 처음 text, 기본btn*/}
                    { item.edit ? 
                      <>
                        <input type='text' placehoder={item.text} />
                        <div className='btn_box'>
                          {/* <button onClick={()=>{deleteBtn(item.id)}}>삭제</button> */}
                          <button onClick={()=>{editBtn(item.id, idx )}}>수정완료</button>
                          <button onClick={()=>{editEndBtn(item.id, idx)}}>취소</button> 
                        </div>
                      </>
                      :
                      <>
                        <p>{item.text}</p> 
                        <div className='btn_box'>
                          <button onClick={()=>{deleteBtn(item.id)}}>삭제</button>
                          <button onClick={()=>{editBtn(item.id, idx)}}>수정</button>
                          <button onClick={()=>{doneBtn(item.id, idx)}}>완료</button> 
                        </div>
                      </>
                    }
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
                    {/* edit? -> 수정할input, 수정btn or 처음 text, 기본btn*/}
                    { item.edit ? 
                      <>
                        <input type='text' placehoder={item.text} />
                        <div className='btn_box'>
                          {/* <button onClick={()=>{deleteBtn(item.id)}}>삭제</button> */}
                          <button onClick={()=>{editBtn(item.id, idx )}}>수정완료</button>
                          <button onClick={()=>{editEndBtn(item.id, idx)}}>취소</button> 
                        </div>
                      </>
                      :
                      <>
                        <p>{item.text}</p> 
                        <div className='btn_box'>
                          <button onClick={()=>{deleteBtn(item.id)}}>삭제</button>
                          <button onClick={()=>{editBtn(item.id, idx )}}>수정</button>
                          <button onClick={()=>{doneBtn(item.id, idx)}}>취소</button> 
                        </div>
                      </>
                    }
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
