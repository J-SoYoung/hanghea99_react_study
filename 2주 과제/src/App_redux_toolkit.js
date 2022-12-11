
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counterSlice";

const AppReduxToolkit = () => {
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);
  console.log(globalNumber)

  // state에 모듈폴더[counterSlice를 export한 이름 counter ()]에 initialState이름[number] 데이터가져옴  
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };
  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  };
  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  };
  return (
    <div>
      {globalNumber}
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default AppReduxToolkit;
