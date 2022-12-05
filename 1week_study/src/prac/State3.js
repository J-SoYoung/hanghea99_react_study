// 원시값이 아닌 데이터를 state로 관리하는 방법 
// 불변성을 지켜줘야 한다. 
// 원본 데이터와 비교해 변한 부분만을 리 렌더링 해줘야 하므로

import React, { useState } from "react";

const State3 = () => {

  // 원시값이 아닌 데이터를 setState로 관리할 때
  const [dogs, setDogs] = useState(["말티즈"])

  const handleClick =(e)=>{
    setDogs([...dogs, "허스키"])
  }
  
  return (
    <div>
      <h1>{dogs}</h1>
      <button onClick={handleClick}>저장</button>
    </div>
  );
}

export default State3;

