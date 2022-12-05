import React, { useState } from "react";
import "./App.css"; 
import CustomButton from "./components/CustomButton.js";
import User from "./components/User.js";
import styled from "styled-components";





const App = () => {
  // user List 상태값
  const [users, setUsers] =useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  // user Input상태값
  const [name , setName] = useState('')
  // user age 상태값
  const [age, setAge] = useState('')
  // button이벤트
  const handleClick = () => {
        // input으로 받은 데이터를 한번에 묶어서 state로 보냄
    const newUser = {
      id: users.length + 1, 
      age: +age, 
      name: name,
    }
    // 배열 안에, newUser + 기존user 
    setUsers([newUser, ...users])
    setName('')
    setAge('')
  }

  const deleteBtn= (id) => {
    const newUserList = users.filter((user)=> user.id !== id)
    setUsers(newUserList)
    console.log(newUserList)
  }

  // 2주차 강의 시작 -------------------------------
  // styled-component
  const boxList = ["red", "green", "blue", 'black', ];

  // 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
  const getBoxName = (color) => {
    switch (color) {
      case "red":
        return "빨간 박스";
      case "green":
        return "초록 박스";
      case "blue":
        return "파란 박스";
      default:
        return "검정 박스";
    }
  };

  return (
    <>
      <h1> 유저데이터 </h1>
      <div>
        <div className="app">
            <User user={users} deleteBtn={deleteBtn}></User>
        </div>
        <div>
          <input value={name}
            placeholder="이름을 입력해주세요"
            onChange={(e) => setName(e.target.value)} 
          />
          <input value={age}
            placeholder="나이를 입력해주세요"
            onChange={(e) => setAge(e.target.value)} 
          />
          <CustomButton color='green' onClick={handleClick} >저장</CustomButton>
        </div>
      </div>

      <div>
        {boxList.map((box,id)=>{
          return (
            // ????? 뭔데!!!!!!!!!! 어케하는건데,, 이해안감
            // getName은 이름넣어주는함수! 아 어. 지금은 머리안돌아가서 안되겠다. ㅂㅂ./
            <StBox key={id} bgColor={box}>{getBoxName(box)}</StBox>
          )
        })}
      </div>
    </>
  );
};





const StBox = styled.div`
  width : 100px;
  height : 100px;
  background-color : ${(props)=> props.bgColor};
  color: white;
  font-weight: 600;
  margin : 20px; 
`;


export default App;




