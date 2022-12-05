// 사용자가 입력한 값 state관리

import React, { useState } from "react";

// 두 개의 형식으로 출력이 가능한데, 함수 이름은 뭐야?
const State2 = () => {
// function State2() {

  const handleClick =(e)=>{
    // ? 함수이름 ()=>, 선언적함수 그런거. 
    // ? 이벤트에서 e 부분 확인하기 
    setValue(input)
    setInput('')
  }
  const handleChange =(e)=>{
    // console.log(e.target.value)
    setInput(e.target.value)
  }
  
  // 인풋으로 들어오는 값을 관리한다.
  const [ input, setInput] = useState('')
  // 화면에 보여지는 값을 관리한다. = (인풋으로 들어온 값을 화면에 보여줌)
  const [ value, setValue] = useState('')


  return (
    <div>
      <h1>{value}</h1>
      <input type='text' value={input} onChange={handleChange}></input>
      <button onClick={handleClick}>저장</button>
            {/* 함수이름 뭐였지? */}
    </div>
  );
}

export default State2;


// 사용자가 입력한 값을 state 로 관리한다 
// 버튼 클릭 (onClick함수) -> 콘솔 출력 확인
// state를 만든다 -> 렌더링 공간 확보
// 버튼 함수를 실행하면 state가 업데이트 되게 한다.
