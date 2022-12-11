// src/redux/modules/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

// action creator, action function, reducer가 하나로 합쳐짐
// slice툴킷을 사용하면 간단히 생성가능
// reducer name을 counter로 설정
const counterSlice = createSlice({
  name: "counter",
  initialState,

  // 리듀서의 내용임과 동시에 action-creator가 된다
  // 함수 이름 : action-value
  // 함수 안의 로직을 이용해 reducer , action-creator생성
  reducers: {
    addNumber: (state, action) => {
      console.log('state',state.number)
      console.log('action', action.payload)
      state.number = state.number + action.payload;

    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});


// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;

// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
