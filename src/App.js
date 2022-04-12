import React from "react";
import Login from "./components/Login";
import SignUpForm from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "./components/TodoMerge";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUpForm />} />
        <Route path="/Todo" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
