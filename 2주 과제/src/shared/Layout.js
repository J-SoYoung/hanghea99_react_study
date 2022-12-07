// src/shared/Layout.js

import React from 'react';

const HeaderStyles = {
  width: '100%',
  background: 'black',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '20px',
  color: 'white',
  fontWeight: '600',
};
const FooterStyles = {
  width: '100%',
  height: '50px',
  display: 'flex',
  background: 'black',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
};

const layoutStyles = {
  display: 'flex',
	flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '90vh',
}

function Header() {
  return (
    <div style={{ ...HeaderStyles }}>
      <span>Sparta Coding Club - Let's learn React</span>
    </div>
  );
}

function Footer() {
  return (
    <div style={{ ...FooterStyles }}>
      <span>copyright @SCC</span>
    </div>
  );
}


function Layout({ children }) {
  // console.log(children) // props_children (array4) route_props
  // router를 layout으로 감싸면 그 안에 내용들이 chilren으로 들어온다 
  // layout에서 받는 porps(children)는 라우터에 연결된 path들 (page)
  return (
    <div>
      <Header />
      <div style={{...layoutStyles}}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;