import { useState, useRef } from 'react';
import './App.css';


function Prac() {
  const [render, setRender] = useState(0)
  const countRef = useRef(0);
  let countVar = 0;

  const doRender = () =>{
    setRender(render + 1)
  }

  const increaseRef=()=>{
    countRef.current = countRef.current + 1;
    console.log(countRef.current)
  }
  const increaseVar=()=>{
    countVar=countVar + 1
    console.log(countVar)
  }

  return (
    <>
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={increaseRef}>ref</button>
      <button onClick={increaseVar}>var</button>
      <button onClick={doRender}>렌더</button>
    </div>
    </>
  )
}

export default Prac;