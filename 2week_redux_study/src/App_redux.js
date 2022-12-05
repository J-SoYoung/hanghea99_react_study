import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.
import { addNumber, minorNumber } from "./redux/modules/md_counter"



// 함수선언문 
function AppRedux() {
  const [number, setNumber] = useState(0)
  const dispatch = useDispatch()
  const globalNumber = useSelector((state)=> state.counter.number)

  const onChangeHandle = (e) =>{
    // 이거왜?
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
    <>
    <h1>리덕스연습</h1>
    {globalNumber}
    <input type='number' onChange={onChangeHandle} />
    <button onClick={onClickAddNumberHandler}> 더하기 </button>
    <button onClick={onClickMinusNumberHandler}> 빼기 </button>
    </>
  );
}

export default AppRedux;



