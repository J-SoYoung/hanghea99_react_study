import React,{ useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../redux/modules/todos"



const TodoForm = ( props ) =>{
  // 구조분해할당으로 props받아서 하나씩 나누기
  // const { todoInput, setTodoInput } = props
  // const { todoInput, todoAdd, setTodoInput } = props
  const [todoInput, setTodoInput] = useState('')
  const dispatch = useDispatch()



  const todoAdd =(e)=>{
    e.preventDefault()
    if(!todoInput){ alert('투두를 작성해주세요') 
    } else {
      // 리덕스를 사용하게 되면 useState로 데이터 관리X
      // const newTodo = { id: new Date().getTime(), todo : todoInput }
      // setTodoList([newTodo, ...todoList])
      // setState가 했던 일을 -> dispatch가 reducer에게 보냄 (action명령)
      dispatch(addTodo({ id: new Date().getTime(), todoInput}))
      setTodoInput('')
    }
  } 


  return (
    <>
      <form >
        <input
          type='text'
          value={todoInput || ""}
          placeholder='오늘의 투두'
          // input값을 업데이트해주기
          onChange={(e)=>{setTodoInput(e.target.value)}}
        />
        <button onClick={todoAdd}> 추가 </button>
      </form>
    </>
  )
}

export default TodoForm;

// 아. 여기서 만든 결과물을 다른 컴포넌트로 보낼 수 없다.
// 그래서 app에서 prop 로 받아와서 하는건가.
// todoForm에서 하는 일이지만 props를 자식에서 부모로 줄 수 X
// App에서 일을 하고, TodoForm으로 넘기고 다시 App으로 넘겨줌?

// 하나의 컴포넌트에서 하는 일은 한 컴포넌트에서 끝내고싶은데,
// 그렇게 하려면 리덕스 쓰는건거?

// 답은 예쓰다. 
// 처음 컴포넌트 만들어서 사용했다가
// state를 자식이 부모한테 넘겨주지 못해서 
// 다시 APP으로 가서 작업했던 기억이... 메모해뒀었는데
// 지금 리덕스를 사용하고나니까 
// 더 크게 와닿는다. 와. 리덕스감사.