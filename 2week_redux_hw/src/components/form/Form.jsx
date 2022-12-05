import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/todos";


const Form = () =>{
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = (e)=>{ 
    e.preventDefault()
    // (mission) input에서 엔터하면 투두 생성되지 않고
    // textare로 넘어가게 하기! 
    let newTodo = {
      id: new Date().getTime() + Math.random(),
      title: title,
      content: content,
      is_done: false,
      is_edit: false,
    }
    // console.log('리스트추가', [newTodo, ...todoList])
    // setTodoList((todoList)=>[newTodo, ...todoList])
    console.log(newTodo)
    dispatch(addTodo({newTodo}))
    setTitle("")
    setContent("")
  }


  return (
    <>
      <form className='input_contain' onSubmit={handleSubmit}>
        <div className='input_box'>
          <span>제목</span>
          <input 
            value={title || ""}
            onChange={(e)=>{setTitle(e.target.value)}}
            type='text' placeholder='오늘의 TODO'
          />
        </div>
        <div className=' input_box'>
          <span>내용</span>
          <textarea 
            value={content || ""}
            onChange={(e)=>{setContent(e.target.value)}}
            type='text' placeholder='TODO의 내용을 작성해주세요'
          />
        </div>
        <button type="submit" >Add TO DO</button>
      </form>
    </>
  )
}
export default Form;