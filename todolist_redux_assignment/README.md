### [과제] 숙련주차 과제 답
답안 제출 내용 : 어떤부분이 문제였고 어떻게 해결했는지에 대해 소스코드를 포함해서 자세한 설명을 적어주세요.

### 문제내용
1. 추가하기 버튼을 클릭해도 추가한 아이템이 화면에 표시되지 않음. 
2. 추가하기 버튼 클릭 후 기존에 존재하던 아이템들이 사라짐.  
3. 삭제 기능이 동작하지 않음. 
4. 상세 페이지에 진입 하였을 때 데이터가 업데이트 되지 않음. 
5. 완료된 카드의 상세 페이지에 진입 하였을 때 올바른 데이터를 불러오지 못함. 
6. 취소 버튼 클릭시 기능이 작동하지 않음.

### 추가하기 - 아이템 표시안됨 (dispatch로 업데이트 해줘야함)

- 수정 전
    
    ```javascript
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.title.trim() === "" || todo.body.trim() === "") return;
        
        setTodo({
          id: 0,
          title: "",
          body: "",
          isDone: false,
        });
    ```
    
- 수정후
    
   ```javascript
    // addTodo 액션함수 import
    import { addTodo } from "../../../redux/modules/todos.js";
    // dispatch 선언
    const dispatch = useDispatch()
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.title.trim() === "" || todo.body.trim() === "") return;
        
        dispatch(addTodo({
          id: id,
          title: todo.title,
          body: todo.body,
          isDone: false,
        }));
      };
    ```
**문제상황**<br> 
- 리덕스를 사용했다면 dispatch로 추가할 리스트 객체를 보냈어야 했는데 setTodo로 보냈다는 점<br>
- setTodo는 input에서 가져온 todo 데이터를 담고 있는 부분이지 list를 추가시키는 부부은 아님<br>
<br>

**해결방안**<br>
dispatch로 액션객체를 리듀서로 보내야 함
- dispatch를 선언해줘야 하고, 액션함수를 import한다 
- 액션함수 addTodo안에는 객체 형태로 새로 받은 리스트를 추가한다
- 리스트 내용은 업데이트 된 내용을 보내야 한다.
- id는 0이 아닌 라이브러리?를 담은 변수를 넣어주고
- title, body는 state에서 관리하는 데이터를 넣어줘야한다.
<br>
<br>

### 추가하기 후 아이템들이 사라짐 (ADD_TODO리듀서 수정)

- 수정 전
    
    ```javascript
    // initial state ( 초기값 형태가 [], {} 섞여있음 -> 제대로 된 결과물 안나옴 ) 
    const initialState = {
      todos: [
        {
          id: "1",
          title: "리액트",
          body: "리액트를 배워봅시다",
          isDone: false,
        },
      ],
      todo: {
        id: "0",
        title: "",
        body: "",
        isDone: false,
      },
    };
    
    // 리듀서 retur부분에서 todos 하나의 데이터로 합쳐서 보내지 않고 따로 출력하고 있음
    const todos = (state = initialState, action) => {
      switch (action.type) {
        case ADD_TODO:
          return {
            ...state,
            todos: [action.payload],
          };
    ```
    
- 수정후
    
    ```javascript
    // initial state 초기값 데이터 형태 고침
    const initialState = {
      todos: [
        {
          id: "0",
          title: "",
          body: "",
          isDone: false,
        },
        {
          id: "1",
          title: "리액트",
          body: "리액트를 배워봅시다",
          isDone: false,
        },
      ],
    };
    
    // ADD_TODO 리듀서수정
    case ADD_TODO:
    	// 불변성유지
    	const copy = [...state.todos]
    	return {
    	  todos : [ action.payload, ...copy ]
    	}
    ```
    <br>

**1. ADD_TODO의 결과로 내보내는 데이터가 새로운 데이터만 출력하고 있다**<br>
- todos  : [ 기존 데이터 + 새로운 데이터 ]  같이 넣어줘야함. <br>
  ( 스프레드 문법을 사용 :  new 객체를 앞에 두고 뒤에 기존 객체 넣어 사용해야 한다. )   <br>
- 위의 코드는 …state로 기존값을 넣었고, 그 뒤에 todos : [ 새 리스트]를 넣었는데 <br>
 이렇게 되면 기존 데이터는 todos안에 들어가지 못하고 새로운 데이터만 출력이 된다.<br>
    
**2. 초기값 설정 문제 : 같은 todo의 초기값인 것 같은데, 형태가 다름 => 같게 고쳐줘야함**<br>
서로 다른 데이터를 나타내는 것이었다면 todos : [ {…} ,{…} ] , todo [  ] 로 나뉘는게 맞음<br>
다른 데이터를 가리킨다고 해도, 두 데이터의 형태를 공통으로 맞춰주는 게 좋음<br>
todos는 배열 안의 객체가, todo는 객체만 들어있기 때문.<br>
<br>
<br>

### 삭제기능 동작하지 않음 (DELETE_TODO가 없음)
- DELETE_TODO 리듀서 추가
    
    ```javascript
    case DELETE_TODO:{
          const copy = [...state.todos]
          const newList = copy.filter((c)=> c.id !== action.payload )
          return { todos : [ ...newList ] }
          };
    ```
- **DELETE_TODO리듀서가 존재하지 않았음 -> 위와 같은 코드 추가함**<br>
action함수로 삭제한 todo의 id를 가져온다<br>
filter 메서드를 활용해서 state에 있는 데이터와 action으로 가져온 <br>
id가 같지 않은 것만 출력하여 newList에 배열 형태로 반환받음<br>
todos에 데이터를 추가함 => newList로 배열이기 때문에 스프레드 문법을 사용해 넣어주었다<br>
<br>
<br>

### 상세페이지에 데이터 업데이트 안됨

- 수정 전
    
    ```javascript
    const dispatch = useDispatch();
      const todo = useSelector((state) => state.todos.todo);
    
      const { id } = useParams();
      const navigate = useNavigate();
    ```
    
- 수정 후
    
    ```javascript
    const dispatch = useDispatch();
      const todo = useSelector((state) => state.todos.todos);
      // const params = useParams();
      const {id} = useParams()
      const data = todo[id]
    
      const navigate = useNavigate();
    ```
    
**문제 상황**<br>
- 페이이지 이동은 문제 없으나 useSelector로 데이터를 제대로 가져오지 못해서 렌더가 안된것임<br>
- 데이터가 여러개인데 페이지에서 어떤 데이터를 출력해야 할지 모르고있음<br>
<br>

**해결 내용**<br>
- useParams가 가져온 id값(=인덱스)으로 전체 todolist에서 상세페이지로 들어온 todo를 가져와 렌더링 해줌<br>
<br>
<br>

### 완료된 카드의 상세페이지의 데이터 못 불러옴

- 수정 전
    
    ```javascript
    <StLink to={`/:${index}`} key={todo.id}>
      <div>상세보기</div>
    </StLink>
    ```
    
- 수정 후
    
    ```javascript
    <StLink to={`/${todo.id}`} key={todo.id}>
      <div>상세보기</div>
    </StLink>
    ```
    <br>
    
**해결 내용**<br>
Link 태그를 타고 넘어가는 부분의 페이지 주소를 제대로 적지 않았기 때문<br>
<br>
<br>


### 취소버튼 작동하지 못함

- 수정 전
    
    ```javascript
    <StButton
      borderColor="green"
      onClick={onToggleStatusTodo}
    >
      {todo.isDone ? "취소!" : "완료!"}
    </StButton>
    ```
    
- 수정 후
    
    ```javascript
    <StButton
      borderColor="green"
      onClick={()=>onToggleStatusTodo(todo.id)}
    >
      {todo.isDone ? "취소!" : "완료!"}
    </StButton>
    ```
    
**문제 상황**<br>
화살표함수가 제대로 정의되어 있지 않았고, <br>
onToggleStatusTodo함수에서 매개변수로 보내주는 todo의 id값이 없었다<br>
<br>

**해결 내용**<br>
화살표함수에서 빠진 부분을 채워주었고, 매개변수 부분인 id도 추가해줌<br>
<br>
<br>
<br>

## Test를 마치며, <br>
내가 만든 코드가 아닌 코드를 보는 것이 신기했다. <br>
내가 고민하면서 짰던 부분을 다른 사람은 어떻게 짰는지 보는 게 새로운 느낌이었다. <br>
코드의 작동하지 않는 부분을 찾으면서 페이지의 전체적인 동작에 대해 생각해보게 되었다.<br>
그리고 작동되지 않는 부분을 말로 표현하려고 하니 바로바로 나오진 않았다. <br>
간단하게 설명을 해도 되지만 '왜 그런지'에 대해 고민하는 순간 막히는 부분들이 있었다<br>
리듀서 부분에서 결과값을 도출해 낼 때, 데이터 형식이라던지... 그런?
그런 부분들을 조금 더 찾아서 공부해야겠다는 생각을 했다.!<br>
여튼, 조금 재미있는 테스트였다, 하 하 하. <br>
