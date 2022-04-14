import React, { useState } from "react";
import Login from "./components/Login";
import SignUpForm from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "./components/TodoMerge";

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [login, setLogin] = useState(true);
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const { todoItem } = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login id={id} pw={pw} setId={setId} setPw={setPw} login={login} />
          }
        />
        <Route
          path="/SignUp"
          element={
            <SignUpForm
              userId={userId}
              userPw={userPw}
              setUserId={setUserId}
              setUserPw={setUserPw}
              login={login}
              setLogin={setLogin}
              todo={todo}
              setTodo={setTodo}
            />
          }
        />
        <Route
          path="/Todo"
          element={
            <TodoApp
              todo={todo}
              setTodo={setTodo}
              text={text}
              setText={setText}
              id={id}
              pw={pw}
              setId={setId}
              setPw={setPw}
              todoItem={todoItem}
              login={login}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
