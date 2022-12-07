
// Action Value
const ADD_TODO = "ADD_TODO";


// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

// Initial State
const initialState = {
  todos :[
    { 
      id: 1,
      title : '지금은 시험중입니다' 
    },
    { 
      id: 2,
      title : '오늘의 투두입니다'   
    },
  ]
};
// 객체안에 프로퍼티로 데이터를 넣어야 한다. 왜? \
// 나는 배열에 넣어버렸따. ㅋㅋ
// const initialState = [
//    { id: 1, title :'ddd'}
//    { id: 2, title :'ddd22'}
// ]


// Reducer
// 사용자가 컴포넌트에서 Action Creator로 payload를 담아 보내는 것은 
// 액션객체에 담겨지고, 그렇게 담겨진 것은 
// 리듀서에서 action.payload에서 꺼내 사용할 수 있습니다.

const todos = (state = initialState, action) => {
  // let copyState = [...state ] 복사해서 사용하려고 했는데 state에러남 
  //state는 iterable이 아니다? 왜? 
  // iterable? 반복가능한 객체인데 (배열은 반복가능한 객체 아닌가?) -> initialState안에서 todos라는 배열을 만들었어야 했음. initialState는 store의 큰 박스여서, 그 안에 이름표를 붙여서 todos의 집을 만들어줬어야 함
  
  switch (action.type) {
    case ADD_TODO:
      console.log('action', action)
      console.log('state', state)
      const {title, id} = action.payload
      console.log(title, id)
      
      return {  
        // todos : [ { id: id, title : title }, ...state,]
        // 이게 왜 이케되남.
        // state를 펼쳐서 가져오는 이유는? 어차피 todos만 있는데! ㅇㅅㅇ?
        ...state,
        todos : [...state.todos, action.payload ]
      };
    default:
      return state;
  }
};

// export default reducer
export default  todos;
