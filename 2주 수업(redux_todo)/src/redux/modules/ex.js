// moduels는 state(data)의 그룹이 모여있는 폴더
// moduels 안에 파일은 각 컴포넌트의 데이터를 모아두는 곳


// Action Value 액션 값 설정
const ADD_EX = "ADD_EX";

// Action Creator 액션 함수 지정
export const exFunc = (payload) => {
  return {
    type: ADD_EX,
    payload: payload,
  };
};


// 3) Initial State 기본 데이터 작성
const initialState = {
  ex : [
    { id: new Date().getTime(), todo : '안녕 Todos11' },
    { id: new Date().getTime(), todo : '안녕 Todos12' },
  ]
};


// 4) Reducer 리듀서 작성
// 리덕스에서는 리듀서가 setState의 역할을 함
const example = (state = initialState, action) => {
  // 매개변수state, action 데이터를 사용하기 위해서는 할당을 줘야함
  switch (action.type) {
    default:
      return state;
  }
};



// 5) export default reducer 리듀서 내보내기
// 모듈을 export 하고 configureStore에 추가한다.
// configStore와 연결된 index에서 module을 사용 할 수 있다.
export default example;





