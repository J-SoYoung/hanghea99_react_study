import React from 'react';

import styled from "styled-components"
import Footer from './Footer';
import NavBar from './NavBar';



function Layout({ children }) {

  return (
    <div>
      <NavBar />
      <Box>
        {children}
      </Box>
      <Footer />
    </div>
  );
}


const Box = styled.div`
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #FAD0C9;
`
export default Layout;