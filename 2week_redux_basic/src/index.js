import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRedux from './AppRedux';
//redux import 
import store from "./redux/config/configStore";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	// App을 Provider로 감싸면 
  // configStore에서 export한 store를 넣어줍니다.
  <Provider store={store}> 
    <AppRedux />
  </Provider>
);



