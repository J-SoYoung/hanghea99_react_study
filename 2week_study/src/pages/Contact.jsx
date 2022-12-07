
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';

const Contact = () => {
    const navigator = useNavigate()
    const data = [
        { id: 1, todo: '리액트 배우기' },
        { id: 2, todo: '노드 배우기' },
        { id: 3, todo: '자바스크립트 배우기' },
        { id: 4, todo: '파이어 베이스 배우기' },
        { id: 5, todo: '넥스트 배우기' },
        { id: 6, todo: 'HTTP 프로토콜 배우기' },
        ];

    return (
    <>
        <div>Contact</div>
        <button onClick = {()=> navigator('/')}> home으로 이동</button>
        <div>
            {data.map((d) => {
            return (
                <div key={d.id}>
                    <div>할일: {d.id}</div>
                    <Link to={`/contact/${d.id}`}>
                        <span style={{ cursor: 'pointer' }}
                        >➡️ Go to: 
                        {d.todo}
                        </span>
                    </Link>
                </div>
            );
            })}
        </div> 
    </>
    )
}

export default Contact;
