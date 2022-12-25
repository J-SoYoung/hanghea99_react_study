import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App_useCallback';
// import AppMemo from './App_memo';
// import App_custom from './App_custom';
import Todo from './Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App_useCallback /> */}
    {/* <AppMemo /> */}
    {/* <App_custom /> */}
    <Todo />
  </React.StrictMode>
);

