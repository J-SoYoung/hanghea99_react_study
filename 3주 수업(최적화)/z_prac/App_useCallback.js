// //App.jsx - useMemo 
// input창에 값이 입력될 때마다 리렌더링 됨
// useMemo로... 리렌더링 안함...?

// import React, { useState } from "react";
// import Button from "./components/Button";

// const App = () => {
//   const [value, setValue] = useState("");

//   const onChangeHandler = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={value} onChange={onChangeHandler} />
//       <Button />
//     </div>
//   );
// };

// export default App;



// src/App.jsx -------------------------------
// useCallback 
// 컴포넌트가 재생성 될 때, 변화가 없으면 리렌더링 하지 않는다
import React, { useCallback, useState } from "react";
import Button from "./components/Button";

const App_useCallback = () => {
        // App.js가 리렌더링 될때마다 재생성됨
  const [value, setValue] = useState("");

        // App.js가 리렌더링 될때마다 재생성됨
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

        // App.js가 리렌더링 될때마다 재생성됨
  const onClickHandler = useCallback(() => {
    console.log("hello button!");
  },[])

  return (
    <div>
      <input type="text" value={value} onChange={onChangeHandler} />
{/* 매번 재생성되는 함수를 props로 넘겨줌 -> Button.js 리렌더링 유발 */}
      <Button onClick={onClickHandler} />
    </div>
  );
};

export default App_useCallback;