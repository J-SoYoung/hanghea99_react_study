import React from 'react';
import CustomButton from './CustomButton';


const User = (props) => {
  // 구조분해할당으로 props를 가져옴
  const { user, deleteBtn } = props
  console.log(props)
  return (
    <>
    {user.map((i,idx)=>{
      // console.log(i,idx)
      return (
      <div className='square-box' key={idx}>
        <div className="square-style">
          {i.age}살 - {i.name}
        </div>
        <CustomButton color='red' 
          onClick={()=>{deleteBtn(i.id)}}> 
          삭제 
        </CustomButton>
      </div>
      )
    })}
    </>
  )
}

export default User;