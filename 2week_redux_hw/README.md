- **메인 페이지**
    - **디자인과 화면 구성은 자유롭게 구현합니다.**
    - **Todo의 상태에 “완료” 그룹과 “진행중" 그룹을 나뉘어서 보이도록 구현**합니다. 예시 영상 꼭 위, 아래가 아니어도 되며 창의적으로 구현해도 됩니다.
        - 예시 영상 보기
            
            [화면 기록 2022-06-27 오후 8.20.14.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7d5a8f8-6e73-41e3-a7c8-0f83e2cdb16e/화면_기록_2022-06-27_오후_8.20.14.mov)
            
    - **Todo를 추가하면  제목 `input`과 내용 `input`은 다시 빈 값이 되도록 구현**합니다.
        - 예시 영상 보기
            
            [화면 기록 2022-06-27 오후 8.16.44.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b6c4b646-58d7-43ee-b942-15046363cb1c/화면_기록_2022-06-27_오후_8.16.44.mov)
            
    - **input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화** 되도록 구현합니다.
        - 예시 영상 보기
            
            [화면 기록 2022-07-27 오전 1.15.52.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6bc8bc8-96d0-46d1-9070-f5e030495cab/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2022-07-27_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.15.52.mov)
            
    - Todo의 완료상태**가 `true`**이면**,** 상태 버튼의 라벨을 **“취소”,  `false`** 이면 라벨을 “**완료”** 로 보이도록 구현합니다.
    - 전체 화면의 **최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한**하고, **컨텐츠를 화면의 가운데로 배치** 합니다.
        - 예시 이미지 보기
            
            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c7c1361-f01d-415e-8722-a40931b1edb5/Untitled.png)
            
    - `상세보기` 클릭하면 **Todo의 상세 페이지로 이동**합니다. 상세 페이지에서 보여야 하는 내용은 아래 토글에서 별도 안내합니다.


    - 상세 페이지의 디자인과 화면 구성은 자유롭게 구현하되, 아래 요소들은 보여야 합니다.
    - Todo의 ID
    - Todo의 제목
    - Todo의 내용
    - `이전으로` 버튼
        - `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면 리스트 화면으로 되돌아 갑니다.