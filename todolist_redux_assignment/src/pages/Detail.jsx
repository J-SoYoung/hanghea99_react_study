import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos.js";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todos);
  // const params = useParams();
  const {id} = useParams()
  const data = todo[id]

  const navigate = useNavigate();

  // 4. detail페이지의 내용이 보이지 않음
  // 페이이지 이동은 문제 없으나
  // useSelector로 데이터를 제대로 가져오지 못해서 렌더가 안된것임
  // 데이터가 여러개인데 페이지에서 어떤 데이터를 출력해야 할지 모르고있음
  // useParams가 가져온 id값(=인덱스)으로 전체 todolist에서  
  // 상세페이지로 들어온 todo를 가져와 렌더링 해줌

  return (
    // <>
    //   <h1>ㅇㅇ</h1>
    // </>
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID :{data.id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{data.title}</StTitle>
          <StBody>{data.body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
