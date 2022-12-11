// --------------- 리덕스 사용 시 --------index적용 
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppExam from './App_exam';
// import AppRedux from './App_redux';
// import AppRoute from './App_route';
// // import App from './App';

// //redux import 
// import store from "./redux/config/configStore";
// import { Provider } from "react-redux";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

// 	// App을 Provider로 감싸면 
//   // configStore에서 export한 store를 넣어줍니다.
//   <Provider store={store}> 
//     {/* <AppExam /> */}
//     <AppRedux />
//     {/* <AppRoute /> */}
//   </Provider>
// );

// index.js


// -------------- 리덕스 툴킷 사용시 index적용 (동일함, 강의때문에 따로)
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/config/configToolkit";

import AppReduxToolkit from "./App_redux_toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppReduxToolkit />
  </Provider>
);



// index.js

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./redux/config/configStore";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );