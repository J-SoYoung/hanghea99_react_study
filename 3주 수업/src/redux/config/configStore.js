// src/redux/modules/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import counter from "../modules/counterSlice";
import todos from "../modules/todosSlice";

// 모듈(Slice)이 여러개인 경우 추가할때마다
// reducer 안에 각 모듈의 slice.reducer를 추가해줘야 합니다.
// configureStore = 모듈과 store생성

const store = configureStore({
  reducer: { 
    // module 추가
    counter: counter,
    todoReducer : todos,
  },
});

// 하고 index에 Provider , store연결해야함
export default store;
