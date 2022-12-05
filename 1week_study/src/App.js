import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.


// ----------------------------
const User = (props) => {
  console.log(props)
  const user = props.users
  console.log(user)
  return (
    <>
    {/* (1) User에서 map을 돌려서 하나씩 App에 넘겨준다 */}
      {user.map((u)=>{
        console.log(u)
        return ( 
          <div className="square-style" key={u.id}>
            {u.age}살 - {u.name}
          </div>)
      })}
      {/* (2) App에서 map을 돌린 결과값을 User로 넘겨서 user는 태그 안에 값만 넣는다 */}
      {/* return <div className="square-style">{user.age}살 - {user.name}</div> */}
    </>
  )
}

// ----------------------------
// user의 데이터를 어떻게 보여줄 것인가
// App에서 다 처리하는 방법도 있지만 컴포넌트를 만들어 따로 관리한다
// User컴포넌트 생성 -> App에 있는 user데이터를 User컴포넌트에 넘겨준다. 
//            App의 렌더링 부분에서 props로 user의 데이터를 User컴포넌트에 넘겨준다.  
// (1) User컴포넌트에서 props를 받아서 "User에서 map을 돌려서" App에 출력해줌 
// (2) "App에서 map을 돌리고" User는 App의 결과물을 받아 태그에 넣은 후 App에서 출력. 

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ])

  const handleChange = (e) => {
    console.log(e.target.value)
    setUsers(e.target.value)
  }
  return (
    <>
      <h1> 유저데이터 </h1>
      <input
        type='text'
        onChange={handleChange}
        value={users|| ""}
        placeholder='글을입력'
      />
      <button>입력</button>
        
      <div className="app">
        {/* 공통 : 기본적으로 user의 정보가 App에 있으니ㅡ 정보를 props로 넘겨줌 */}
        {/* 차이 : 보여주는 방식의 차이 */}
        <User users={users}/>
        {/* {users.map((user) => {
          return <User user={user} key={user.key}></User>
        })} */}
      </div>
    </>
  );
};

export default App;
