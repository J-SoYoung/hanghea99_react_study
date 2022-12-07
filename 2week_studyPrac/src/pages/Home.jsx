import styled from "styled-components"

import Form from "../components/Form";
import TodoList from "../components/TodoList";



function Home() {
  return (
    <Contain>
      <Form />
      <TodoList />
    </Contain>
  );
}

const Contain = styled.div`


`

export default Home;
