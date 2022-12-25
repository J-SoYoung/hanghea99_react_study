import React, { useState } from "react";
import styled from "styled-components";
import nextId from "react-id-generator";

import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/modules/todos.js";

const Form = () => {
  const id = nextId(); 
  const dispatch = useDispatch()

  // 초기값
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });
  // console.log(todo)
  
  // state한번에 받아서 setTodo로 보내기
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    // console.log(name, value)
    setTodo({ ...todo, [name]: value });
  };

  // 추가하기 버튼 : 아이템 화면에 표시되지 않는 문제
  // 1. 리덕스를 사용했다면 dispatch로 추가할 리스트 객체를 보냈어야 했는데  
  //    setTodo로 보냈다는 점setTodo는 input에서 가져온 
  //    todo 데이터를 담고 있는 부분이지 list를 추가시키는 부부은 아님

  // 2. dispatch로 액션객체를 리듀서로 보내야 함
  // - dispatch를 선언해줘야 하고, 액션함수를 import한다 
  // - 액션함수 addTodo안에는 객체 형태로 새로 받은 리스트를 추가한다
  // - 리스트 내용은 업데이트 된 내용을 보내야 한다.
  // - id는 0이 아닌 라이브러리?를 담은 변수를 넣어주고
  // - title, body는 state에서 관리하는 데이터를 넣어줘야한다.

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    
    dispatch(addTodo({
      id: id,
      title: todo.title,
      body: todo.body,
      isDone: false,
    }));
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
