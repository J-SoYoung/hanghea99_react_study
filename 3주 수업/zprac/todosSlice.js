// src/redux/modules/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos :  [
    { 
    id : 1,
    title : '리덕스 툴킷 적용한 투두..',
    text : '자바스크립트가 이렇게나 어렵다니!',
    done : false
    },
    { 
    id : 2,
    title : '리액트 AXIOS화이팅 ',
    text : '그 다음은 서버연결이다',
    done : false
    },
  ]
};

// action 생성하는 부분이 사라지고 아래 부분에서
// 액션value, 액션함수, 리듀서가 합쳐짐
const todosSlice = createSlice({
  // 모듈의 이름, 초기상태값  들어감
  // 리듀서 안의 이름이 액션 함수 이름과 같다
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log('state', state.todos)
      // console.log('action', action.payload)
      // stste는 따로 출력을 할 수 없다. 
      // state의 initialState의 객체이름을 넣어서 출력한다
      // state.(init)=> 기본state = 바꿀 값 넣어주기 
      state.todos = [action.payload, ...state.todos]
    },
    delTodo: (state, action) => {
      // 따로 출력해보지 않아도, state.todos가 기본데이터라는거
      console.log('action', action.payload)
      const copy = [...state.todos]
      const newList = copy.filter((t)=> t.id !== action.payload)
      state.todos = [ ...newList ]
    },
    doneTodo: (state, action) => {
      console.log('action-id', action.payload)
      const copy = [...state.todos]
      const idx = copy.findIndex((t)=> t.id == action.payload)
      console.log(idx)
      copy[idx].done = !copy[idx].done
      // state.todos = [...copy]
      // state.todos = [...copy]를 넣으려고 했는데
      // state에 다시 안넣어줘도... done이 작동을 하네요??!@@@ 
      // 여기는 return이 없는데.. ㅇㅅㅇ 어 .... 그런것까지도 축약ㅇ ㅣ된건가
    },
  },
});


// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { addTodo, delTodo, doneTodo } = todosSlice.actions;
export default todosSlice.reducer;
