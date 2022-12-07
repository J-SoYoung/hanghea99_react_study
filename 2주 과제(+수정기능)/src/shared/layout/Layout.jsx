import styled from "styled-components"

import Footer from "./Footer";

import NavBar from "./NavBar";


const Layout = ({ children }) => {

  return (
    <div>
      <NavBar />
      <LayOutBox>
        {children}
      </LayOutBox>
      <Footer />
    </div>
  );
}

const LayOutBox = styled.div`
  width: 100%;
  background-color: #ffec99;
  font-family:  'NanumSquareNeo-Variable';
`

export default Layout;