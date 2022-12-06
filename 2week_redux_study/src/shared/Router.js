import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Cont from "../pages/Cont";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Layout from "./Layout";


// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는, 
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='works' element={<Works />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='contact/:id' element={<Cont />}/>
          {/* :/id => 동적인 값을 가지고 페이지 이동하겠다
          useParams()에서 확인할 수 있다. contact의 id값을 가지고 이동하면 cont의 내용을 보여주겠다 */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
