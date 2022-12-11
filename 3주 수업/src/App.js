import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.

const App = () => {
  const [todos, setTodos] = useState(null);
  const [todo, setTodo] =useState({ title: ""})
  console.log(todos)
  // axios를 통해서 get 요청을 하는 함수를 생성합니다.
  // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data); 
    // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };
  const onSubmit = (todo) =>{
    axios.post("http://localhost:3001/todos", todo)
  }
  useEffect(() => {
    fetchTodos();
    // 생성한 함수를 컴포넌트가 mount 됐을 떄 함수를 실행.
  }, []);

  // data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.
  console.log(todos);
  return(
    <>
      <form onSubmit={(e)=>{
        e.preventDefault()
        onSubmit(todo)
      }}>
        <input 
          onChange={(e)=>{
            const {value} =e.target
            setTodo({ 
              ...todo, title : value})
            }}
          type='text' placeholder='오늘의 할일'
        />
        <button>Add TO DO</button>
      </form>
      <div>
        {todos?.map((todo)=>(
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </>
  );
};

export default App;


