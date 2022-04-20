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
  // useEffect(() => {
  //   // console.log(window.localStorage.getItem(id));
  //   // console.log(JSON.parse(window.localStorage.getItem(login)));
  //   // console.log("MOUNT");
  //   // const getData = JSON.parse(localStorage.getItem(id));
  //   // getData.todo = [];
  //   // localStorage.setItem(id, JSON.stringify(getData));
  //   // if (JSON.parse(window.localStorage.getItem(login)).id === id) {
  //   // } else {
  //   //   console.log("zzz");
  //   // }
  // }, []);
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
  // 5. TodoApp에서 만들고 삭제된 Todo배열들을 2에서 만든 value의 todo[]에 넣는다
  if (
    window.localStorage.getItem(login) !== null &&
    JSON.parse(window.localStorage.getItem(id).todo !== null)
  ) {
    // 로그인 된 상태
    const getData = JSON.parse(window.localStorage.getItem(id));
    getData.todo = todo;
    window.localStorage.setItem(id, JSON.stringify(getData));
  } else {
    console.log("???");
  }

  return (
    <Container>
      <Head id={id} login={login} todo={todo} />
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
