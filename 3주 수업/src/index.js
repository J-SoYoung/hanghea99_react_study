import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import App from "./App"; 
// import Todo from "./Todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 최상위 app 컴포넌트에 store를 주입해줌
  <Provider store={store}>
    <App />
    {/* <Todo /> */}
  </Provider>
);