import React, { useState } from "react";
import Container from "./Container";
import CreateTodo from "./Create";
import Head from "./Head";
import TodoItems from "./List";
import generateRandomTodoId from "../util/generateRandomTodoId";

function TodoApp({
  id,
  pw,
  setId,
  setPw,
  todo,
  setTodo,
  text,
  setText,
  todoItem,
  login,
}) {
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
      const finalTodo = nextTodo.filter((todo) => todo.isDeleted === false);
      setTodo(finalTodo);
      setText("");
    }
  };
  const onRemoveItem = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Head id={id} setId={setId} pw={pw} setPw={setPw} login={login} />
      <TodoItems
        todo={todo}
        setTodo={setTodo}
        onRemoveItem={onRemoveItem}
        todoItem={todoItem}
      />
      <CreateTodo onChange={onChange} onAddTodo={onAddTodo} text={text} />
    </Container>
  );
}

export default TodoApp;
