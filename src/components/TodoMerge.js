import React, { useEffect } from "react";
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
  useEffect(() => {
    console.log(window.localStorage.getItem(id));
    console.log("MOUNT");
    console.log(JSON.parse(window.localStorage.getItem(id)).todo);
    const alreadyTodo = JSON.parse(window.localStorage.getItem(id)).todo;
    console.log(alreadyTodo);
    <TodoItems
      todo={alreadyTodo}
      setTodo={setTodo}
      onRemoveItem={onRemoveItem}
      todoItem={todoItem}
    />;
  }, []);
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
      console.log(finalTodo);
      setTodo(finalTodo);
      setText("");
    }
  };
  const onRemoveItem = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  // 5. TodoApp에서 만들고 삭제된 Todo배열들을 2에서 만든 value의 todo[]에 넣는다
  if (
    window.localStorage.getItem(login) !== null &&
    JSON.parse(window.localStorage.getItem(id).todo !== null)
  ) {
    console.log("로그인되어있음");
    const getData = JSON.parse(window.localStorage.getItem(id));
    getData.todo = todo;
    window.localStorage.setItem(id, JSON.stringify(getData));
    console.log(getData);
  }

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
