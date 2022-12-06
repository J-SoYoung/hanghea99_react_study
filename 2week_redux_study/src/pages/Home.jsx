
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    //라우터 사용
    const navigator = useNavigate()
    return (
    <>
        <h1>Home</h1>
        <p> 버튼 핸들러 -> 페이지이동</p>
        <button onClick = {()=> navigator('/works')}> Works로 이동</button>
        <button onClick = {()=> navigator('/contact')}> Contact로 이동</button>

        <div>

        </div>
    </>
    ) 

    

}

export default Home;

