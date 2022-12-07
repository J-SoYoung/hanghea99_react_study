import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components"
import TodoCard from "../components/TodoCard";

function Detail() {
  const params = useParams()
  // console.log(params.id)
  const todo = useSelector((state)=>state.todos.todos)
  const idx = todo.findIndex((t)=> t.id == params.id)
  const data = todo[idx]

  // const editBtn

  return (
    <Contain>
      <Box>
        <ContentBox>
          <p>{data && data.title}</p>
          <p>{data && data.content}</p>
          <p>{params.id}</p>
          {/* <EditBtn onClick={editBtn}>수정</EditBtn> */}
        </ContentBox>
        <Link to='/'>홈으로 이동</Link>
      </Box>
    </Contain>
  );
}


const Contain = styled.div`
  height: 100vh;
  border: 1px solid #ffec99;
`
const Box = styled.div`
  background-color: white;
  width: 450px;
  height: 450px;
  margin: 150px auto;
  padding: 50px 30px 30px ;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 1px 1px 5px lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  color :#ff922b;
`
const ContentBox = styled.div`
  font-size : 25px;
  line-height: 35px;
`
const EditBtn = styled.button`
  padding: 5px 15px;
  box-sizing: border-box;
  margin: 10px
`


export default Detail;
