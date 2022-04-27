import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import SignUpForm from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "./components/TodoMerge";
function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [login] = useState(true);
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const { todoItem } = useState({});

  useEffect(() => {
    const loggedInUserIdFromLocalStorage =
      localStorage.getItem("loggedInUserId");
    const parsedLoggedInUser = JSON.parse(loggedInUserIdFromLocalStorage);
    if (parsedLoggedInUser) {
      const loggedInUserData = localStorage.getItem(parsedLoggedInUser);
      const parsedUserData = JSON.parse(loggedInUserData);
      setTodo(parsedUserData.todo);
      setId(parsedUserData.userId);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              id={id}
              pw={pw}
              setId={setId}
              setPw={setPw}
              login={login}
              setTodo={setTodo}
            />
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
              todo={todo}
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
