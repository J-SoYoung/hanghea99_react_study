import styled from "styled-components"

const NavBar = () =>{
  return (
    <>
      <Nav className='nav_contain'>
        <Left className='nav_title_L'>young's Blog</Left>
        <Right className='nav_title_R'>REACT</Right>
      </Nav>
    </>
  )
}

const Nav = styled.div`
  width: 100%;
  height: 70px;
  color: #6E6E6D;
  font-weight: 600;
  font-size: 35px;
  background-color: #FAD0C9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Left = styled.div``
const Right = styled.div``



export default NavBar;
