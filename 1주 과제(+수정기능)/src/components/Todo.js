
// 컴포넌트 나누기 d왓 무엇 ㅋㅋㅋㅡ 

const Todo = (list, deleteBtn, doneBtn) => {
  console.log(list)
  return (
    <>
      <div className='contain'>
        <div className='todo_list_box list_box'>
          {/* todo list */}
          <h1 className='list_title'>오늘의 할 일</h1>
            <div className='card_box'>
            {list.map((item)=>{
              return(
                <div key={item.id} className='todo card'>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div>
                    <button onClick={()=>{deleteBtn(item.id)}}>삭제</button>
                    <button onClick={()=>{doneBtn(item.done, item.id)}}>완료</button>
                    {/* <button onClick={()=>{setDone((done) => !done)}}>완료</button> */}
                  </div>
                </div>
              )
            })}
          </div>
          {/* done list */}
          <h1 className='list_title'>DONE</h1>
        </div>
      </div>
    </>
  )
}


export default Todo