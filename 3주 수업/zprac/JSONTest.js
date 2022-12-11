import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.

const JSONTest = () => {
  const [todos, setTodos] = useState(null);
  const [todo, setTodo] = useState({title : '오늘투두'});

  // patch에서 사용할 id, 수정값의 state를 추가
  const [targetId, setTargetId] = useState(null);
  const [editTodo, setEditTodo] = useState({ title: "", });
  

  const fetchTodos = async () => {
  // axios를 통해서 get 요청을 하는 함수를 생성합니다.
  // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다. 
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data); 
    // json서버에 있는 todos데이터를 가지고와서 data에 넣어줌
    // useState의 setTodo를 사용해 data값을 업데이트 해줌 
  };
  // console.log(todos);


  const onSubmitHandler = (todo) => {
    axios.post("http://localhost:3001/todos", todo); 
		// 1.  이때 todos는 [{투두하나}]임 이때 서버에 있는 todos도 [{투두하나}]임
		// setTodo가 실행되면 서버 요청이 끝나고 업데이트 해서 [{투두가},{두개임}]
		setTodos([...todos, todo]) 
    // 2. <-- 만약 setTodo데이터가 없다면, useEffect로 넘어간다
		// 4. 새로고침 해서 진짜 현재 서버 데이터를 받아오기전에 상태를 똑같이 동기시켜줌 
		// 5. 어떻게보면 유저한테 서버에서 새로 받아온것처럼 속이는거
  };

  const handleDelBtn = (todoId) =>{
    axios.delete(`http://localhost:3001/todos/${todoId}`)
    // setTodos( [ ...todos ]), axios에러남 
    console.log(todos) 
  }
  
  // 수정버튼 이벤트 핸들러 추가 👇
  const onClickEditButtonHandler =(todoId, edit) => {
    axios.patch(`http://localhost:3001/todos/${todoId}`, edit);
  };

  useEffect(() => {
    fetchTodos();
    // GET 요청 실행할 때 
    // todos데이터를 가지고 오는 get요청의 fetchTodo 함수를 실행
    // 컴포넌트가 mount(첫렌더)됐을 때 useEffect내용을 한 번만 실행

    // 3. 새로고침해서 여기를 다시 실행해줘야 서버값이 새로 들어옴
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >

        {/* 👇 수정기능에 필요한 id, 수정값 input2개와 수정하기 버튼을 추가 */}
        <div>
          <input
            type="text"
            placeholder="수정하고싶은 Todo ID"
            onChange={(ev) => {
              setTargetId(ev.target.value);
            }}
          />
          <input
            type="text"
            placeholder="수정값 입력"
            onChange={(ev) => {
              setEditTodo({
                ...editTodo,
                title: ev.target.value,
              });
            }}
          />
          <button
						// type='button' 을 추가해야 form의 영향에서 벗어남
            type="button"
            onClick={() => onClickEditButtonHandler(targetId, editTodo)}
          >
            수정하기
          </button>
        </div>

        <input
          type="text"
          onChange={(e) => {
            const { value } = e.target;
            setTodo({
              ...todo,
              title: value,
            });
          }}
        />
        <button>추가하기</button>
      </form>

      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>
						{/* todo의 아이디를 화면에 표시 */}
            {todo.id} :{todo.title}
            <button
              type="button"
              onClick={() => handleDelBtn(todo.id)}
            >
              삭제하기
            </button>
          </div>
        ))}
      </div>

    </>
  )

  
};

export default JSONTest;



