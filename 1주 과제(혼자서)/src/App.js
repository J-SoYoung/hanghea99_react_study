import { useState } from 'react';
import './App.css';




function App() {
  const [ title, setTitle ]= useState();
  const [ text, setText ]= useState();
  // 수정 input state : edit의 초기값은 어떻게 데리고 오지?
  const [ editChangeInput, setEditChangeInput ]= useState(); 
  const [ list, setList ]= useState([
    { 
    id : new Date().getTime() + Math.random() ,
    title : '자바스크립트가..',
    text : '자바스크립트가 이렇게나 어렵다니!',
    done : false,
    edit : false,
    },
    { 
    id : new Date().getTime() + Math.random() ,
    title : '왜 업데이트 안되는거지! ',
    text : '와오늘은 진짜 대방 졸리다',
    done : false,
    edit : false,
    },
  ]);
  console.log(list)
  
  // TODO 추가
  const addTodoBtn = () => {
    let newList ={
      // id : list.length +1 ,
      id : new Date().getTime() + Math.random() ,
      title : title,
      text : text,
      done : false,
      edit : false,
    }
    // console.log(newList)
    setList([newList, ...list])
    setTitle("")
    setText("")
    // console.log(list)
  }

  // TODO 삭제
  const deleteBtn= (_id) => {
    console.log(_id)
    const newUserList = list.filter((l) => {return ( l.id !== _id )})
    setList(newUserList)
  } 

  // TODO 완료
  // 고유id를 받아와서 todolist에서 해당하는 index를 찾았다.
  // list에서 해당 index의 todo를 가져와 done값을 바꿔 setState에 넣는다
  const doneBtn = (id) =>{
    const doneUser = [...list ]
    const index= doneUser.findIndex((v)=> v.id === id)
    doneUser[index].done = !doneUser[index].done
    setList(doneUser)
  }

  // 처음 수정 버튼 눌렀을 때
  // 개발할 때 미리 리스트업, 구현해야 할 것을 적어놓는다.

  // 처음 수정버튼 눌렀을 때 
  // data : edit - true 
  // view : 인풋창(원래 data있는), 수정완료/취소 버튼 
  const editBtn = (id) =>{
    const editUser = [...list ] 
    const index = editUser.findIndex((v)=> v.id === id)
    editUser[index].edit = !editUser[index].edit
    setList(editUser) 
  }

  // 수정완료 버튼 
  // 인풋에 입력한 데이터를 다시 본래 화면으로 보여줌.
  // 고유id와 list에 있던 id와 비교해서 인덱스 출력하기
  const editEndBtn = (id) =>{
    // const editData = ()
    console.log(id)
    const editText = [...list ] 
    const index = editText.findIndex((v)=> v.id === id)
    console.log(index)
    editText[index] = {
      id :  new Date().getTime() + Math.random(),
      title : editText[index].title,
      // text : editText[index].text, -> 원래text값
      text : editChangeInput, // 수정 input에서 새로 입력한 값 state로 가져온거
      done : editText[index].done,
      edit : !(editText[index].edit),
    }
    console.log(editText[index])
    // todolist에 수정한 값 넣어주기 => 안댐! 
    setList([editText[index], ...list])
    setList( list => list.id === id && [...editText[index]] )

  }

  // title값을 변경해서 state로 바꿔주면 되지 않을까... 
  // 생각이 들긴 한데 done 값을 true false로 변경하는 것처럼
  // 새 변수 newText  => 
  // 원래 title값을 가져오고 걔를 가져와서 변경해서 
  // 기존의 title안에 바꿔주면 걔만 바뀌지 않을까 
  // 하는 생각을 해봤습니다 새로 edit값 안주구여 ~~~~~~~~ ?~?~?~?~?
  // 기존 배열안에 있는 애들에서 값을 변경하는 방법으로..



  // 수정취소 버튼 
  const editCancleBtn = (id) =>{
    // 원래 있던 data, (원래있던 데이터를 setList저장???해야되나??)
    // 원data + 삭제/수정/완료버튼
    const editUser = [...list ]   
    const index = editUser.findIndex((v)=> v.id === id)
    editUser[index].edit = !editUser[index].edit
    setList(editUser)
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
            // value의 값을 조금 더 명확하게 하기위해ㅋ..
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
            {list
              .filter((v)=> v.done === false)
              .map(({title, text, id, edit})=>(
                // console.log(title,text, id, edit, done, idx)
                <div key={id} className='todo card'>
                <h3>{title}</h3>
                {/* edit? -> 수정할input, 수정btn or 처음 text, 기본btn*/}
                { edit ? 
                  <>
                    <input type='text' 
                      placehoder={text} onChange={(e)=>{setEditChangeInput(e.target.value)}}/>
                    <div className='btn_box'>
                      <button onClick={()=>{editEndBtn(id)}}>수정완료</button>
                      <button onClick={()=>{editCancleBtn(id)}}>취소</button> 
                    </div>
                  </>
                  :
                  <>
                    <p>{text}</p> 
                    <div className='btn_box'>
                      <button onClick={()=>{deleteBtn(id)}}>삭제</button>
                      <button onClick={()=>{editBtn(id)}}>수정</button>
                      <button onClick={()=>{doneBtn(id)}}>완료</button> 
                    </div>
                  </>
                }
            </div>  
            ))}
          </div>
        </div>

        {/* done list , todo 완성되면 마저 바꾸기*/} 
        <div className='todo_list_box list_box'>
          <h1 className='list_title'>DONE</h1>
          <div className='card_box'>
            {list
            .filter((v)=> v.done === true)
            .map(({title, text, id, edit})=>(
              // console.log(title,text, id, edit, done, idx)
            <div key={id} className='todo card'>
              <h3>{title}</h3>
              {/* edit? -> 수정할input, 수정btn or 처음 text, 기본btn*/}
              { edit ? 
                <>
                  <input type='text' placehoder={text} />
                  <div className='btn_box'>
                    <button onClick={()=>{editEndBtn(id)}}>수정완료</button>
                    <button onClick={()=>{editCancleBtn(id)}}>취소</button> 
                  </div>
                </>
                :
                <>
                  <p>{text}</p> 
                  <div className='btn_box'>
                    <button onClick={()=>{deleteBtn(id)}}>삭제</button>
                    <button onClick={()=>{editBtn(id)}}>수정</button>
                    <button onClick={()=>{doneBtn(id)}}>취소</button> 
                  </div>
                </>
              }
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </> 
  )
}
export default App;
