// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator
// Todo를 추가하는 action creator
export const addTodo = (payload) => {
  console.log(payload)
  return {
    type: ADD_TODO,
    payload,
  };
};

// Todo를 지우는 action creator
export const deleteTodo = (payload) => {
  // console.log(payload)
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
  console.log(payload)
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// initial state
const initialState = {
  // 같은 todo list의 초기값인 것 같은데, 형태가 다름 => 같게 고쳐줘야함
  // 2개의 데이터가 같이 보여짐 
  todos: [
    {
      id: "0",
      title: "",
      body: "",
      isDone: false,
    },
    {
      id: "1",
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
  ],
};


const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:{
      // 불변성유지
      const copy = [...state.todos]
      return {
        todos : [ action.payload, ...copy ]
      }
    }
      // 2. 추가하기 후 아이템들이 사라짐 ( 리듀서 수정 )
      // ADD_TODO의 결과로 내보내는 데이터가 새로운 데이터만 출력하고 있다
      // todos  : [ 기존 데이터 + 새로운 데이터 ]  같이 넣어줘야함. 
      // ( 스프레드 문법 => new 객체를 앞에 두고 뒤에 기존 객체 넣어 사용)
      
      // 위의 코드는 …state로 기존값을 넣었고, 그 뒤에 
      // todos : [ 새 리스트]를 넣었는데 이렇게 되면 기존 데이터는 
      // todos안에 들어가지 못하고 새로운 데이터만 출력이 된다.

      // 정확한 부분은 조금 더 공부! (약간 애매함)
      // 둘의 형태가 같은 상태에서 todos에 저장을 해야지 리스트가 추가된다(?!).
      // console.log( { todos: [action.payload], ...state })
      // return {
      //   ...state,
      //   todos: [action.payload], 
      // };

    case DELETE_TODO:{
      const copy = [...state.todos]
      const newList = copy.filter((c)=> c.id !== action.payload )
      return { todos : [ ...newList ] }
      };
      // 3. 삭제기능이 동작하지 안흠 
      // DELETE_TODO리듀서가 존재하지 않았음 -> 위와 같은 코드 추가함
      // action함수로 삭제한 todo의 id를 가져온다
      // filter 메서드를 활용해서 state에 있는 데이터와 action으로 가져온 
      // id가 같지 않은 것만 출력하여 newList에 배열 형태로 반환받음
      // todos에 데이터를 추가함 => newList로 배열이기 때문에 스프레드 문법을 사용해 넣어주었다 

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
  
    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
