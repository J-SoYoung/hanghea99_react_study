// moduels는 state(data)의 그룹이 모여있는 폴더
// moduels 안에 파일은 각 컴포넌트의 데이터를 모아두는 곳


// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서 ( 변화를 주는 함수다 )=> setState의 역할
const counter = (state = initialState, action) => {
  // console.log(action)
  // action객체를 받는 방법
  // counter모듈 안에 action객체(변화를 주는 함수)가 들어있음
  // 컴포넌트로 disptch를 통해서 action객체를 전달받음
  // action안에 있는 type을 swich문으로 검사해서 일치하는 케이스를 찾음
  // type과 switch문의 case가 일치하면 코드를 실행하고
  // 실행 결과의 새로운 state를 반환한다
  // 결과로 나온 state는 새로운 모듈의 state가 된다
  switch (action.type) {
    case "PLUS_ONE" :
      return { number : state.number + 1 } 
      // state의 number + 1을 해서 다시 number에 넣어라
    case "MINUS_ONE" :
      return { number : state.number - 1 }
    default:
      return state;
  }
};

// 모듈을 export 하고 configureStore에 추가한다.
// 중앙관리소인 configStore와 연결된 index에서 module을 사용 할 수 있다.
export default counter; 


