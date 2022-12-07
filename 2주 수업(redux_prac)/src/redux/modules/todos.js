
// 1) Action Value 액션 값 설정
const ADD_TODO = "ADD_TODO";
const READ_TODO = "READ_TODO";
const DEL_TODO = "DEL_TODO";
const EDIT_TODO = "EDIT_TODO";
const DONE_TODO = "DONE_TODO";


// 2) Action Creator 액션 함수 지정
export const addTodo = (payload) => {
  // console.log(payload.newTodo)
  return {
    type: ADD_TODO,
    payload: payload.newTodo,
  };
};
// readTodo는 굳이 필요없는거 아닌가?
export const readTodo = (payload) => {
  return {
    type: READ_TODO,
    payload: payload,
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
      title: '리덕스 구현222',
      content: '리덕스까지 합쳐서 구현합니다',
      is_done: false,
      is_edit: false,
    },
    {
      id: new Date().getTime() + Math.random(),
      title: '리액트 구현222',
      content: '이건 true입니다',
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
      const newTodo = [action.payload, ...copy]
      return {
        todos : [ ...newTodo ]
        // 하나씩 형태를 풀어서 어떻게 넣어야 될지 생각할 것. 
        // 원래 리스트와, 새 리스트 형태를 맞춰야 함. 
      }
    }
    case DEL_TODO:{
      // state를 복사하고 => 가져올 형태 확인, 스프레드 하고 나서
      // 데이터를 합칠 때, 형태 주의 {객체}, [{}] 
      // 객체는 이터러블이 아니다 => map등의 함수를 사용할 수 없다.
      // action으로 id를 가지고 와서, filter를 사용한 후 list에 추가
      const copy = [...state.todos]
      const newList = copy.filter((l)=> l.id !== action.payload);
      return {
        todos : [...newList]
      }
    }
    case DONE_TODO:{
      const copy = [...state.todos]
      const index = copy.findIndex((l) => l.id === action.payload);
      copy[index].is_done = !copy[index].is_done;
      return {
        todos : [...copy]
      }
    }
    case EDIT_TODO:{
      const copy = [...state.todos]
      const index = copy.findIndex((l) => l.id === action.payload);
      copy[index].is_done = !copy[index].is_done;
      return {
        todos : [...copy]
      }
    }
    default: 
      return state;
  }
};




// 5) export default reducer 리듀서 내보내기
export default todos; 