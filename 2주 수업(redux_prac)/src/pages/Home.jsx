import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


// 컴포넌트
import Form from '../components/form/Form';
import List from '../components/list/List';


const Home = () => {
  // 리스트를 하나씩 클릭했을 때 해당 id를 가지고 페이지이동하려면
  // store에 있는 데이터를 가지고와야함
  const list = useSelector((state)=> state.todos.todos)
  // console.log(list)

  return (
    <>
      <div>
        <Form />
        <List />
        {/* 안나오는 이유는? 이미 List컴포넌트에서 하나씩 출력해주고있기 때문에?
        {list.map((l)=>{
          <Link to={`/detail/${l.id}`}><List /></Link>
        })} */}

      </div>
    </>
  )
}

export default Home;