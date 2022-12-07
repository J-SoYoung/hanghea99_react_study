import styled from "styled-components"
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

const Detail = () => {
  const todoList = useSelector((state)=>state.todos.todos)
  const navigator = useNavigate()
  const params = useParams();
  const data = todoList.filter((t) => t.id == (params.id))
  console.log(data)
  
  return (
    <Contain>
      <Box>
        <TextBox>
          <p>{data[0].title}</p>
          <p>{data[0].content}</p>
        </TextBox>
        <BtnBox>
          <button>완료</button>
          <button>삭제</button>
          <button>수정</button>
          <button onClick = {()=> navigator('/')}> home으로 이동</button>
        </BtnBox>
      </Box>
    </Contain>
  )
}

const Contain = styled.div`
  height: 100vh;
`
const Box = styled.div`
  width : 400px;
  height: 400px;
  margin: 100px auto;
  padding: 30px;
  box-sizing: border-box;
  color: white;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  background-color: #FAD0C9;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const TextBox = styled.div`
  height: 80%;
  width: 100%;
  background-color: white;
  color : gray;
`
const BtnBox = styled.div`
`




// const Box = styled.div``

export default Detail;