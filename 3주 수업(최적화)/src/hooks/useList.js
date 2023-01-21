import React, { useState } from "react";

const useList = () =>{

  const [value, setValue] = useState("")
  const handler = (e) =>{
    setValue(e.target.value)
  }
  return [value, handler]

}
export default useList; 