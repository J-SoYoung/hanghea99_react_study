
// import React, { useState } from "react";

// const Count = () => {
//   const [value, setValue] = useState(0)

//   const onClickSum = ()=> {
//     setValue((value) => value + 1)
//   }
//   console.log(value)

//   const onClickMin = ()=> {
//     if(value < 1 ) {
//       alert ('더이상 -할 값이 없습니다' )
//     } else {
//       setValue((value) => value - 1)
//     }
//   }
//   // const onClick = ()=> {
//     // 받아온 값이 plus, minus냐에 따라 setValue에 넣을 함수가 달라지게. 
//     // 매개변수 가져오는거 찾기, 함수 형태를 정리해라 
//     // status === 0? 
//     // setValue((value) => value - 1)마이너스해라 : 플러스해라 
//   // }
  
//   return (
//     <>
//       <div>
//         Counter : {value}
//       </div>
//       {/* onClick에 매개변수 보내서 넣기 */}
//       <button onClick={onClickSum} > + </button>
//       <button onClick={onClickMin} > - </button>
//     </>
//   );
// }

// export default Count;

// // 함수를 잘 활용해야 더 다양한 출력을 시도해 볼 수 있을 것 같다.
// // 함수의 종류, 형태, 특징을 정리하자. 


// src/App.js

import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counterSlice";

const App = () => {
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);
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
  console.log(number);
  return (
    <div>
      {globalNumber}
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
