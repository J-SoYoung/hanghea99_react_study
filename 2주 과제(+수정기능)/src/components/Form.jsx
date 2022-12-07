import styled from "styled-components"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/modules/todos"


function Form() {
  const [todoTitle, setTodoTitle] = useState('')
  const [todoText, setTodoText] = useState('')

  const dispatch = useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newList = {
        id: new Date().getTime() + Math.random(),
        title: todoTitle,
        content: todoText,
        is_done: false,
        is_edit: false,
    }
    // console.log(newList)
    // 이미 객체형태인데, 또 객체에 싸서 보내? 왜?
    dispatch(addTodo({newList}))
    setTodoTitle("")
    setTodoText("")
  }

  return (
    <>
      <FormBox onSubmit={handleSubmit} >
      {/* <form className='input_contain' onSubmit={handleSubmit}>*/}
        <InputBox>
          <Span>제목</Span>
          <Input 
            value={todoTitle || ""}
            onChange={(e)=>{setTodoTitle(e.target.value)}}
            type='text' placeholder='오늘의 TODO'
          />
        </InputBox>
        <InputBox>
          <Span>내용</Span>
          <Textarea 
            value={todoText || ""}
            onChange={(e)=>{setTodoText(e.target.value)}}
            type='text' placeholder='TODO의 내용을 작성해주세요'
          />
        </InputBox>
        <Btn type="submit" >Add TO DO</Btn>
      </FormBox>
    </>
  );
}

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  background-color: white;
`
const InputBox = styled.div`
  width : 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
`
const Span = styled.span`
  font-family: 'NanumSquareNeo-Variable';
  font-size: 20px;
  color: #ff922b;
  margin-bottom: 10px;
`
const Input = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 10px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-bottom: 3px solid #ffec99;
`
const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border: 3px solid #ffec99;
`
const Btn = styled.button`
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #ffec99;
  color: #ff922b;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 1px 1px 2px lightgray;
  cursor: pointer;
`
export default Form;
