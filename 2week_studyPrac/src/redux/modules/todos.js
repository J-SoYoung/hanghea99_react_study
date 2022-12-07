// 1) Action Value 액션 값 설정
const READ_TODO = "READ_TODO";
const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const EDIT_TODO = "EDIT_TODO";
const DONE_TODO = "DONE_TODO";


// 2) Action Creator 액션 함수 지정
export const readTodo = (payload) => {
  return {
    type: READ_TODO,
    payload: payload,
  };
};
export const addTodo = (payload) => {
  // console.log(payload)
  return {
    type: ADD_TODO,
    payload: payload.newList,
  };
};
export const delTodo = (payload) => {
  // console.log(payload)
  return {
    type: DEL_TODO,
    payload: payload,
  };
};
export const editTodo = (payload) => {
  console.log(payload)
  return {
    type: EDIT_TODO,
    payload: payload,
  };
};
export const doneTodo = (payload) => {
  // console.log(payload)
  return {
    type: DONE_TODO,
    payload: payload,
  };
};


// 기본데이터를 todoInput -todo 
// 3) 초기 상태값: 객체형태로 저장한다.
const initialState = {
  todos : [
    {
      id: new Date().getTime() + Math.random(),
      title: '타이틀입니다.',
      content: '내용입니다. 리덕스와 함께 구현중',
      is_done: false,
      is_edit: false,
    },
    {
      id: new Date().getTime() + Math.random(),
      title: 'done값은 true',
      content: 'done에 들어와야 하는 값입니다',
      is_done: true,
      is_edit: false,
    },
  ]
};



// 4) Reducer 리듀서 작성
// 리덕스에서는 리듀서가 setState의 역할을 함
// 매개변수state, action 데이터를 사용하기 위해서는 할당을 줘야함
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:{
      const copy = [...state.todos]
      // console.log(copy)
      // console.log('action',action.payload)
      // console.log('state', state.todos)
      return { todos : [ action.payload, ...copy] };
      // action객체, copy는 배열이라 스프레드 연산자로 풀어서 객체로만듦. 
      // 그 후에 배열을 씌워서 return한다
    }
    case DEL_TODO:{
      const copy = [...state.todos]
      const newList = copy.filter((c)=> c.id !== action.payload)
      return { todos : [...newList] }
    }
    case DONE_TODO:{
      const copy = [...state.todos]
      const index = copy.findIndex((c)=> c.id === action.payload)
      copy[index].is_done = !copy[index].is_done
      return { todos : [ ...copy ]}
    }
    

    default: 
      return state;
  }
};


// 5) export default reducer 리듀서 내보내기
export default todos;