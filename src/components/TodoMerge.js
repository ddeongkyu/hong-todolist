import React, { useEffect } from "react";
import Container from "./Container";
import CreateTodo from "./Create";
import Head from "./Head";
import TodoItems from "./List";
import generateRandomTodoId from "../util/generateRandomTodoId";
import { useNavigate } from "react-router-dom";

function TodoApp({ id, todo, setTodo, text, setText, todoItem, login }) {
  useEffect(() => {
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

  const isDeletedChange = (todoId) => {
    const newTodo = todo.map((item) => {
      if (item.id === todoId) {
        return {
          ...item,
          isDeleted: true,
        };
      }
      return item;
    });
    setTodo(newTodo);
    const bringLoginId = JSON.parse(window.localStorage.getItem(login)).id;
    const getData = JSON.parse(window.localStorage.getItem(bringLoginId));
    getData.todo = newTodo;
    window.localStorage.setItem(bringLoginId, JSON.stringify(getData));
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
