import { useState, useRef } from 'react';
import './App.css';


// 변수와 ref의 차이
// 버튼을 클릭해 데이터를 +시켰다. 
// 이후 state버튼을 만들어 화면을 렌더시켰더니
// ref는 값이 변경되어 있었고, var는 0이었다
// 이유? 화면이 렌더링 될 때마다 변수의 값이 초기값이 되는데 
// ref는 컴포넌트가 렌더링 되는 것에 영향을 받지 않는다
// ref는 커포넌트가 mount 이후부터 unMount될 때까지 같은값을 유지한다
// 하지만 변수는 렌더 이후 초기값으로 돌아간다 
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