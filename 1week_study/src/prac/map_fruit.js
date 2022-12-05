import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.


const App = () => {
  const vegetables = ['t사과','배','토마토','당근','포토'];
  return (
    <div className="app">
      {vegetables.map((vegetableName) =>{
        return(
          <div className="square-style" key={vegetableName}>
            {vegetableName}
          </div>
        )
      })}
    </div>

  )
}
export default App;

