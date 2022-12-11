import React, { useState } from "react";

// 리덕스
import { useSelector, useDispatch } from "react-redux"; 
import { addNumber, minorNumber } from "./redux/modules/md_counter"



// 함수선언문 
function AppRedux() {
  const [number, setNumber] = useState(0)
  // 리덕스 사용 
  const dispatch = useDispatch()
  const globalNumber = useSelector((state)=> state.md_counter.number)
  console.log(globalNumber)

  const onChangeHandle = (e) =>{
    // 구조분해할당
    const {value} = e.target;
    setNumber( +value )
    // setNumber( "" )
  }
  const onClickAddNumberHandler = () =>{
    dispatch(addNumber(number))
  }
  const onClickMinusNumberHandler = () =>{
    dispatch(minorNumber(number))
  }
  



  return (
    <div className="basic_box">
    <div>
      <h1>리덕스연습</h1>
        {globalNumber}
        <input type='number' onChange={onChangeHandle} />
        <button onClick={onClickAddNumberHandler}> 더하기 </button>
        <button onClick={onClickMinusNumberHandler}> 빼기 </button>
      </div>
    </div>
  );
}

export default AppRedux;


