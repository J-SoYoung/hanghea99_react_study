import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components"

import TodoCard from "./TodoCard";

function TodoList() {
  // is_done있으면 return todo 없으면  return done
  const todo = useSelector((state)=> state.todos.todos)
  // console.log(todo)

  return (
    <>
      <TodoBox>
        <Title>TODO</Title>
        <TodoGrid>
        {todo
          ?.filter((t)=> t.is_done === false)
          ?.map((l)=> { 
            return (
                <TodoCard 
                  title = {l.title}
                  id = {l.id}
                  content = {l.content}
                  is_done = {l.is_done }
                />
                )})}
        </TodoGrid>
      </TodoBox>

      <TodoBox>
        <Title>DONE</Title>
        <TodoGrid>
        {todo
          ?.filter((t)=> t.is_done === true)
          ?.map((l)=> { 
            return (
                <TodoCard 
                  title = {l.title}
                  id = {l.id}
                  content = {l.content}
                  is_done = {l.is_done }
                />
                )})}
        </TodoGrid>
      </TodoBox>
    </>
  )
}

const TodoBox = styled.div`
  padding: 20px;
  box-sizing: border-box;
;
`
const Title = styled.div`
  font-size : 35px;
  font-weight : 800;
  font-family: 'NanumSquareNeo-Variable';
  color: #ff922b;
`
const TodoGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export default TodoList;
