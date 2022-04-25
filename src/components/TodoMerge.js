import React, { useEffect } from "react";
import Container from "./Container";
import CreateTodo from "./Create";
import Head from "./Head";
import TodoItems from "./List";
import generateRandomTodoId from "../util/generateRandomTodoId";
import { useNavigate } from "react-router-dom";

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
      const getLoginId = JSON.parse(window.localStorage.getItem(login)).id;
      const getData = JSON.parse(window.localStorage.getItem(getLoginId));
      getData.todo = finalTodo;
      window.localStorage.setItem(getLoginId, JSON.stringify(getData));
      setTodo(finalTodo);
      setText("");
    }
  };

  const onSave = () => {
    const bringLoginId = JSON.parse(window.localStorage.getItem(login)).id;
    const refrehTodo = JSON.parse(
      window.localStorage.getItem(bringLoginId)
    ).todo;
    const getData = JSON.parse(window.localStorage.getItem(bringLoginId));
    getData.todo = todo;
    window.localStorage.setItem(bringLoginId, JSON.stringify(getData));
    setTodo(refrehTodo);
  };

  const onRemoveItem = (id) => {
    const removeTodo = todo.filter((todo) => todo.id !== id);
    setTodo(removeTodo);
    const getLoginId = JSON.parse(window.localStorage.getItem(login)).id;
    const getData = JSON.parse(window.localStorage.getItem(getLoginId));
    getData.todo = removeTodo;
    window.localStorage.setItem(getLoginId, JSON.stringify(getData));
  };

  let navigate = useNavigate();
  const onHeadClick = () => {
    localStorage.removeItem(login);
    setTodo([]);
    alert(id + "님 다음에 또 만나요!!!!");
    navigate("/");
  };

  const isDeletedChange = (e) => {
    if (e.target.checked) {
      console.log(todo);
      console.log(e.target);
      todo[0].isDeleted = true;
      onSave();
    } else if (!e.target.checked) {
      console.log(todo);
      console.log(e.target);
      onSave();
    }
  };

  return (
    <Container>
      <Head onHeadClick={onHeadClick} />
      <TodoItems
        todo={todo}
        onRemoveItem={onRemoveItem}
        todoItem={todoItem}
        isDeletedChange={isDeletedChange}
      />
      <CreateTodo onChange={onChange} onAddTodo={onAddTodo} text={text} />
    </Container>
  );
}
export default TodoApp;
