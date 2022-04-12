import React, { useState } from "react";
import Container from "./Container";
import CreateTodo from "./Create";
import Head from "./Head";
import TodoItems from "./List";
import generateRandomTodoId from "../util/generateRandomTodoId";

function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [isDeleted, setisDeleted] = useState(false);
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onAddTodo = (e) => {
    e.preventDefault();
    if (text === "") {
      return null;
    } else {
      const nextTodo = [
        ...todo,
        { id: generateRandomTodoId(), text, isDeleted: false },
      ];
      setTodo(nextTodo);
      setText("");
      setTodo(todo.filter((todo) => todo.isDeleted === true));
    }
  };

  const onChangeChk = (e) => {
    setChecked(e.currentTarget.checked);
    const onToggle = () => {
      setTodo(
        todo.map((todo) =>
          todo.isDeleted === false
            ? { ...todo, isDeleted: !todo.isDeleted }
            : todo
        )
      );
    };
    onToggle();
  };

  return (
    <Container>
      <Head />
      <TodoItems
        todo={todo}
        setTodo={setTodo}
        isDeleted={isDeleted}
        setisDeleted={setisDeleted}
        checked={checked}
        setChecked={setChecked}
        onChangeChk={onChangeChk}
      />
      <CreateTodo onChange={onChange} onAddTodo={onAddTodo} text={text} />
    </Container>
  );
}

export default TodoApp;
