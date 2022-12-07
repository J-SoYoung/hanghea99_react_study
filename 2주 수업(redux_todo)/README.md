# 항해 리액트 2주차 
### 수업내용
- styled-component, 
- useEffect, 
- redux, 
- react-router-dom
<br>
<br>

### 리덕스 폴더구조
**redux / config - configSrore / module - 각 module파일**<br>
- config 리덕스 설정 관련 폴더
- configStore 중앙 State 관리소 => state설정코드 
- module 생성 후, rootReducer에 추가해줘야 
- index에서 데이터를 받아서 사용할 수 있다.
<br>
- moduels는 state(data)의 그룹이 모여있는 폴더
- moduels 안에 파일은 각 컴포넌트의 데이터를 모아두는 곳
 
 ### 액션함수 생성
 ```javascript
 // 1) Action Value 액션 값 설정
const ADD_TODO = "ADD_TODO";

// 2) Action Creator 액션 함수 지정
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

// 3) 초기 상태값: 객체형태로 저장한다.
const initialState = {
  todos : [
    { id: new Date().getTime(), todo : '안녕 Todos11' },
    { id: new Date().getTime(), todo : '안녕 Todos12' },
  ]
};

// 4) Reducer 리듀서 작성
const todos = (state = initialState, action) => {
  console.log('action',action)
  console.log('state',state)
  switch (action.type) {
		case ADD_TODO:
		return {
		        todos : [ ...newTodo ]
		      }
				// 하나씩 형태를 풀어서 어떻게 넣어야 될지 생각할 것. 
				// 원래 리스트와, 새 리스트 형태를 맞춰야 함.
    default:
      return state;
  }
};

// 5) export default reducer 리듀서 내보내기
export default todos;
