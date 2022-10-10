# ABOUT THIS PROJECT

이 프로젝트는 TODOLIST를 만드는 프로젝트입니다.

### 구성과 역할

Container 컴포넌트 안에
Head, TodoItem, CreateTodo 컴포넌트가 있습니다.

Head 컴포넌트는 화면에 보이는 TODOLIST를 보여주는 역할을 맡고있죠.

TodoItem 컴포넌트는 CreateTodo 컴포넌트에서 입력된 text를 받아와서 화면에 보여줍니다.
text의 왼쪽에는 체크박스가 있고, 체크박스를 체크하면 text-decoration: line-through가 활성화되면서 이 항목이 완료되었음을 알려줍니다.
text의 오른쪽에는 X표시가 있으며, 이를 클릭하면 입력한 text가 화면에서 사라지게 됩니다.

CreateTodo 컴포넌트에는 Input과 Button이 있습니다.
Input의 text를 입력하고 Button을 누른다면 TodoItem 컴포넌트 안으로 들어갑니다.

### Detail

멀티 유저를 지원합니다.

Local Storage를 이용하여 이전 로그인 유저의 Todo List를 저장하며,

로그아웃 후 다시 로그인 하여 들어가도 이전에 작성하였던 Todo List가 유지됩니다.

### 실행

터미널에서 `npm start`를 입력해 주세요 !
