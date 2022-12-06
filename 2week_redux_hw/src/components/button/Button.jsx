import { useDispatch, useSelector } from "react-redux"
import { delTodo, doneTodo, editTodo } from "../../redux/modules/todos";

const Button = () =>{
  const todolist = useSelector((state)=>state.todos.todos)
  console.log(todolist)

  const dispatch = useDispatch()  
  const todoList = useSelector((state)=> state.todos.todos);
  // console.log(todoList)

  const deleteBtn = (id) =>{
    console.log('삭제',id)
    dispatch(delTodo(id))
    // setState로 했던 기능을 delTodo로 넘김
    // const newList=todoList.filter((l)=>{return l.id !== id;});
    // setTodoList(newList);
  }

  const doneBtn = (id)=>{
    dispatch(doneTodo(id)) 
    // console.log('done',id)
    // const doneUser = [...todoList];
    // const index = doneUser.findIndex((v) => v.id === id);
    // doneUser[index].is_done = !doneUser[index].is_done;
    // setTodoList(doneUser);
  }

  const editBtn=(id)=>{
    dispatch(editTodo(id))
  }

  // 버튼에 걸려있는 함수
  // 함수에 보낼 인자 -> 리스트 가져와서 리스트 안에 있는 걸 찾아줘야하나?
  // 버튼은 각각 map이나 filter로 돌려서 해당 인덱스에 관한 버튼이어야 하나?
  // return (
  //   <>
  //   {/* 버튼컴포넌트 만들고 싶었는데. 생각보다 걸린게 많네요.ㅋㅋㅋㅋ
  //   일단 이건 뒤로 미룹시다  */}
  //     {todoList
  //     .filter((t)=> { 
  //       (t.is_done===false)  
  //       return (
  //         <div>
  //           <button>삭제</button>
  //           <button>수정</button>
  //           <button>완료</button>
  //           {/* <button onClick={()=>{deleteBtn(l.id)}}>삭제</button>
  //           <button onClick={()=>{editBtn(l.id)}}>수정</button>
  //           <button onClick={()=>{doneBtn(l.id)}}>완료</button> */}
  //         </div>
  //       )
  //     })}
  //   </>
  // )
}

export default Button;