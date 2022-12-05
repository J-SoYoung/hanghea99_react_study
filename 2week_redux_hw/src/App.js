import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';


// 컴포넌트
import Form from './components/form/Form';
import Header from './components/header/Header';
import List from './components/list/List';

function App() {

  return (
    <div className='App'>
      <Header />
      <Form />
      <List />
    </div>
  );
}

export default App;
