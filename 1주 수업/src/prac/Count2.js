
import React, { useState } from "react";

const Count2 = () => {
  const [value, setValue] = useState(0)

  const onClickSum = ()=> {
    setValue((value) => value + 1)
  }
  
  return (
    <>
      <div>
        Counter : {value}
      </div>
      {/* onClick에 매개변수 보내서 넣기 */}
      <button onClick={() => {setValue((value) => value + 1)}}> + </button>
      <button onClick={() => {setValue((value) => value - 1)}}> - </button>
    </>
  );
}

export default Count2;
