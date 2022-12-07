import { useState, useRef } from 'react';
import './App.css';



function Prac() {
  // state와 ref의 차이점 
  // state는 요소가 업데이트 되면 화면이 렌더링 되지만
  // ref는 요소만 업데이드 될 뿐, 화면 렌더링은 일어나지 않음
  // state가 올라갈 때, 한번에 올라간다. 
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  console.log(countRef)

  const increaseCountState = ()=>{
    setCount(count + 1)
  }
  const increaseCountRef = () =>{
    countRef.current = countRef.current + 1
    console.log('ref', countRef.current  )
  }


  return (
    <>
    <div>
      <p>state : {count}</p>
      <button onClick={increaseCountState}>State올려</button>
      <span>업데이트</span>
      <p>{countRef.current}</p>
      <button onClick={increaseCountRef}>Ref올려</button>

    </div>
    </>
  )
}

export default Prac;