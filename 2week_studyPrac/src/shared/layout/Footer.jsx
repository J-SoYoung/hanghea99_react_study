import styled from "styled-components"

const Footer = () =>{
  return (
    <>
      <FootBox>
        <div>
          병아리개발자 copyright @2022
        </div>
      </FootBox>
    </>
  )
}

const FootBox = styled.div`
  width: 100%;
  height: 70px;
  color: #ff922b;
  font-weight: 600;
  font-size: 20px;
  background-color: #ffec99;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;



export default Footer;
