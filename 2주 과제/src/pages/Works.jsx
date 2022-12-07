import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Works = () => {
    //라우터 사용
    const navigator = useNavigate()

    // useLocation사용
    const location = useLocation();
    console.log("location :>> ", location);
    // 해당 페이지?의 정보를 얻을 수 있음

    return (
    <>  
    <h1>work</h1>
    <div>{`현재페이지 : ${location.pathname.slice(1)}`}</div>
    <button onClick = {()=> navigator('/')}> home으로 이동</button>
    <Link to ='/contact'>contact 로 이동</Link>
    </>
    )


    
}

export default Works;

