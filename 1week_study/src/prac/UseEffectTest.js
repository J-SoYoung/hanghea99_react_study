import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("hello useEffect");
  },[]); // 의존성배열 
  // 비어있음 = 렌더링이 일어날 때마다 실행
  // [ ] = 한번만 실행
  // [value] = 해당값이 변할때마다 렌더링

  return (
    <div>
      <h1>hello</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default App;