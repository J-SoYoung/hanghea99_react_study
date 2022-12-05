import { useSelector } from "react-redux"

const TodoBox = ()=>{
  // App에서 props로 todoList받아와서 사용안해도됨!
  // const { todoList } = props
  // useSelector로 redux-store에 있는 데이터를 불러와서 사용 
  
  const todoList = useSelector((state)=>state.todos.todos)
  // console.log(todoList)

  return (
    <>
      {todoList.map((t,idx)=>{
        // console.log(t)
        return(
          <div key={idx}>{t.todoInput}</div>
        )
      })}
    </>
  )
}

export default TodoBox;