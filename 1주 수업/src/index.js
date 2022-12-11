
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import Count from "./Count";
import Test from "./test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <Count />
    {/* <Test /> */}
  </Provider>
);