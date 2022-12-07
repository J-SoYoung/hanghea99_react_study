import styled from "styled-components"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delTodo, doneTodo, editEndTodo, editTodo } from "../redux/modules/todos";


function TodoCard(props) {
  // console.log(props)
  const [EditChangeInput, setEditChangeInput] = useState()
  const [EditChangeContent, setEditChangeContent] = useState()
  const { title, id, content, is_done, is_edit} = props
  const dispatch = useDispatch()

  const deleteBtn = (id) =>{
    // console.log('삭제',id)
    dispatch(delTodo(id))
  }
  const doneBtn = (id) => {
    // console.log('완료',id)
    dispatch(doneTodo(id))
  }
  const editBtn = (id)=> {
    // console.log('수정',id)
    dispatch(editTodo(id))
  }
  const editEndBtn  = (id)=>{
    // console.log('수정완료',id)
    const newEdit = {
      id: id,
      title: EditChangeInput,
      content: EditChangeContent,
      is_done: false,
      is_edit: true,
  }
  dispatch(editEndTodo({newEdit}))
  }

  return (
    <>
      <CardBox key={id} className='todo_card' >
        <Link 
          to ={`/detail/${id}`} 
          style={{color:"black", textDecoration:"none", fontSize:'14px', margin:'0 0 5px 0'}}>
          상세보기
        </Link>
        {is_edit? (
          <>
            <Input 
              type='text' defaultValue={title}
              onChange={(e)=>{setEditChangeInput(e.target.value)
            }}/>
            <Textarea 
              type='text' defaultValue={content}
              onChange={(e)=>{setEditChangeContent(e.target.value)
              }}/>
            <T_btnBox>
              <button onClick={() => {editEndBtn(id)}}>수정완료</button>
              <button onClick={() => {editBtn(id)}}>수정취소</button>
            </T_btnBox>
          </>
        ) : (
          <>
            <T_title className='todo_title'>{title}</T_title>
            <T_content>{content}</T_content>
            <T_btnBox>
              <button onClick={()=>{deleteBtn(id)}}>삭제</button>
              <button onClick={()=>{editBtn(id)}}>수정</button>
              <button onClick={()=>{doneBtn(id)}}>
                {!is_done? '완료' : '취소' }
              </button>
            </T_btnBox>
          </>

        )}
      </CardBox>
    </>
  );
}
const CardBox = styled.div`
  width: 260px;
  height : 190px;
  background-color: white;
  padding: 10px;
  margin: 15px ;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  border-radius: 10px;
  box-shadow: 1px 1px 5px lightgray;
;
`
const T_title = styled.div`
  background-color: #ffec99;
  width:100%;
  margin: 10px 0; 
  padding:10px;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
`
const T_content = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px 0 ;
  box-sizing: border-box;
`
const T_btnBox = styled.div`
  text-align: center;
`
const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  border: 2px solid #ffec99;
  margin: 10px 0;
  padding-left: 10px;
  box-sizing: border-box;
`
const Textarea = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
  border: none;
  outline: none;
  border: 2px solid #ffec99;
`


export default TodoCard;
