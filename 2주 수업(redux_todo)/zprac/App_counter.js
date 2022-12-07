import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.



// 함수표현식
// const App = ()=>{
// 함수선언문 
function App() {
  // action객체 생성
  const dispatch = useDispatch()

  // state는 전체 state가져오는 것
  const counterStore = useSelector((state)=> state);
  console.log(counterStore) 

  // state가져오기 =>   전체 state에서 counter-module에 number를 가져와라!
  const plusNumber = useSelector((state)=> state.counter.number);
  // const minusNumber = useSelector((state)=> state.counter.number);

  return (
    <div className="App">
      <h1>리덕스를 배워봅시다</h1>
      <div>
        {/* action객체 보내기  
          - dispatch는 함수형태로 작성해야 한다
          - 함수 => dispatch를 통해서, PLUS_ONE타입의 액션을 실행하라
          - action객체를 reducer로 보낼 수 있다 */}
        <div>{plusNumber}</div>
        <button onClick={()=>{dispatch({type:'PLUS_ONE'})}}> +1 </button>
        <button onClick={()=>{dispatch({type:'MINUS_ONE'})}}> -1 </button>
      </div> 
      <div>
        {/* <button onClick={()=>{dispatch({type:'MINUS_ONE'})}}> -1 </button> */}
        {/* 같은 모듈안에 switch type만 다르다. 그렇다면, useSelector로 가져오는 결과값은 공유해도 되지 않나? -를 위한 변수는 필요없고, 하나의 결과값이 + - 되게한다 */}
      </div>
    </div>
  );
}

export default App;



