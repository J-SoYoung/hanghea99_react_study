// 버튼 컴포넌트
function CustomButton(props){
  // 구조분해할당으로 props 받기
  const {color, onClick, children } = props
  if (color){    
    return (
      <button 
        style = {{backgroundColor : color, color:"white"}}
        onClick = {onClick}>
        {children}
      </button>)
  }
  return <button onClick = {onClick}>{children}</button>
}

export default CustomButton;