
// 1) Action Value 액션 값 설정
const ADD_TODO = "ADD_TODO";


// 2) Action Creator 액션 함수 지정
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};


// 기본데이터를 todoInput -todo 
// 3) 초기 상태값: 객체형태로 저장한다.
const initialState = {
  todos : [
    { id: new Date().getTime(), todoInput : '안녕 Todos11' },
    { id: new Date().getTime(), todoInput : '안녕 Todos12' },
  ]
};



// 4) Reducer 리듀서 작성
// 리덕스에서는 리듀서가 setState의 역할을 함
// 매개변수state, action 데이터를 사용하기 위해서는 할당을 줘야함
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // console.log('action',action.payload)
      // console.log('state', ...state.todos)
      // 하나씩 형태를 풀어서 어떻게 넣어야 될지 생각할 것. 
      // 원래 리스트와, 새 리스트 형태를 맞춰야 함. 
      const newTodo = [action.payload, ...state.todos]
      return {
        todos : [ ...newTodo ]
      }
    default: 
      return state;
  }
};


// 5) export default reducer 리듀서 내보내기
export default todos; 