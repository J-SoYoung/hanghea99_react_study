import React, { useState } from "react";

// 라우터
import { useNavigate } from "react-router-dom/dist";
import Router from "./shared/Router";


const AppRoute = () =>{
  return (
    <>
    <h1>라우터연습</h1>
    <Router/>
    {/* router를 app에 넣어주는 이유는, 
    우리가 만든 컴포넌트에서 가장 최상위 컴포넌트이기 때문 
    path별로 분기가 되는 Router.js파일을 App에 위치시키는 것 
    */}
    </>
  )
}

export default AppRoute;