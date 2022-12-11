// src/redux/modules/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

// action 생성하는 부분이 사라지고 아래 부분에서
// 액션value, 액션함수, 리듀서가 합쳐짐
const counterSlice = createSlice({
  // 모듈의 이름, 초기상태값  들어감
  // 리듀서 안의 이름이 액션 함수 이름과 같다
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      console.log('state', state.number)
      console.log('action', action)
      // state의 initialState안, 객체이름을 넣어줘야 한다
      state.number = state.number + action.payload;
      console.log('결과',state.number)
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});


// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { addNumber, minusNumber } = counterSlice.actions;
export default counterSlice.reducer;
