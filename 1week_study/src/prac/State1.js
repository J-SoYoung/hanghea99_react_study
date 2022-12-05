// State 1
// State는 상태관리를 해준다.  
import React, { useState } from "react";

function Child(props) {
  return (<div>
    <button onClick={()=>{
      props.setName('박할아')
    }}>
      할아버지 이름 바꾸기
    </button>
    <div>{props.grandFatherName}</div>
  </div>);
}

function Mother(props) {
  return <Child 
    grandFatherName={props.grandFatherName} 
    setName={props.setName}/>;
}

function GrandFather() {
  const [name, setName] = useState("김할아"); // state를 생성
  return <Mother grandFatherName={name} setName={setName} />;
}

// 기본컴포넌트
function State1() {
  return <GrandFather />;
}

export default State1;


// 기본컴포넌트
// function Test()
// test 컴포넌트에서는 GrandFather 호출하고 있다

// function GrandFather() {
// GrandFather에는 name이라는 State가 있다. 초기값은 '김할아'
// GrandFather는 Mother컴포넌트를 호출하고 있다.
// grandFatherName이름의 props를 name값으로 넘겨주고 있다. 
//                               => name = state로 관리되는 값 
// props로 setName(state를 업데이트 하기 위한 함수)도 넘겨주고 있다

// function Mother(props) {
// Mother컴포넌트는 자신이 props 값을 사용하는 게 아니고 
// Child컴포넌트에 넘겨준다

// function Child(props) {
// Child컴포넌트에서는 props를 받아서 div에 값을 보여주고
// button의 onClick함수에 setName의 state함수를 넣어서 
// 버튼을 클릭하면 '박할아'로 값을 업데이트 해 준다. 

// 숙제 : state를 사용해 어떻게 const의 값을 바꿨는가!? 
