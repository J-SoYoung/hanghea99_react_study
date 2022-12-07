import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.


// ----------------------------
const Rtan = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.value.name}가 짱이에요</p>
      <button onClick={() => (props.setName('진도사우르스'))}>바꿔라</button>
    </>

  )
}

const Test = () => {
  const [name, setName] = useState({name : 'Rtan'})
  return (
    <>
      <h1>라이프사이클이란!</h1>
      <Rtan value={name} setName={setName}/>

    </>
  );
};

export default Test;

