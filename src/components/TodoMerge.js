import React, { useEffect } from "react";
import Container from "./Container";
import CreateTodo from "./Create";
import Head from "./Head";
import TodoItems from "./List";
import generateRandomTodoId from "../util/generateRandomTodoId";

function TodoApp({ id, todo, setTodo, text, setText, todoItem, login }) {
  // Since getting an id from localStorage is async, id can be null at first.
  // And then it becomes valid after the first render once it's fetched from localStorage.
  // Moreover, we don't need to do any logic hereif there's no id (if there's no loggedInUser)
  // from -HONG;
  useEffect(() => {
    setTodo([]);
    const bringLoginId = JSON.parse(window.localStorage.getItem(login)).id;
    const refreshTodo = JSON.parse(
      window.localStorage.getItem(bringLoginId)
    ).todo;
    setTodo(refreshTodo);
    if (!id) return;
    if (
      window.localStorage.getItem(login) !== null &&
      JSON.parse(window.localStorage.getItem(id).todo !== null)
    ) {
      const getData = JSON.parse(window.localStorage.getItem(id));
      getData.todo = todo;
      window.localStorage.setItem(id, JSON.stringify(getData));
      setTodo(todo);
    }
  }, [id]);

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
      // 아예 finalTodo 자체를 localStorage의 todo안에 넣어버리면?
      // 그렇다면 내가 원하는걸 할 수 있지 않을까?
      // login id 가져오기
      const getLoginId = JSON.parse(window.localStorage.getItem(login)).id;
      // login id를 key로 사용해보기
      const getData = JSON.parse(window.localStorage.getItem(getLoginId));
      // 데이터를 수정하고
      getData.todo = finalTodo;
      // 데이터 덮어쓰기를 해보자
      window.localStorage.setItem(getLoginId, JSON.stringify(getData));
      setText("");
    }
  };
  const onRemoveItem = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Head id={id} login={login} todo={todo} setTodo={setTodo} />
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
