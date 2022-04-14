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
      // const handleChecked = (todoItemId) => {
      //   const changedTodo = todo.filter((todoItem) => {
      //     console.log(todoItem);
      //     if (
      //       // todoItem.isDeleted === false
      //       todoItem.isDeleted === true
      //     ) {
      //       return [...todo, { isDeleted: !todo.isDeleted }];
      //     }
      //     return todo + console.log("??");
      //   });
      //   setTodo(changedTodo);
      // };
      // setTodo([...todo, handleChecked, nextTodo]);
      console.log(nextTodo);
      setTodo(nextTodo);
      setText("");
      // console.log(todo);

      // setTodo(todo.filter((todo) => todo.id !== false));
      const getData = JSON.parse(localStorage.getItem(id));
      // console.log(getData);
      localStorage.setItem(id, JSON.stringify(getData));
    }
  };
  const onRemoveItem = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  const onChangeChk = (e) => {
    console.log(e.todoItem);
    // todoItem.isDeleted === !todoItem.isDeleted;
    // console.log(todo.length);
    // console.log(todo[0]);
    // console.log();
    // console.log();
    // if (
    //   e.target.id === todo.id
    //   // &&e.target.checked === false
    // ) {
    //   setTodo(
    //     todo.map((todo) =>
    //       todo.isDeleted === false
    //         ? { ...todo, isDeleted: !todo.isDeleted }
    //         : todo
    //     )
    //   );
    // } else {
    //   console.log("?");
    // }
    // if (e.target.checked === false) {
    //   setTodo([{ ...(e.target.isDeleted === !isDeleted) }]);
    // } else if (e.target.checked === true) {
    //   setTodo([{ ...(e.target.isDeleted === !isDeleted) }]);
    // }
    // const chkTarget = e.target.checked;
    // console.log(chkTarget);
    // if(chkTarget === true) {
    //   setTodo(todo.map((chkTarget) =>{...todo, chkTarget.isDeleted: !isDeleted})
    // }
    // console.log(e.target);
  };
  // console.log(todo);
  // console.log(todoItem);
  // console.log(todo[0].index);
  // const findTodoIndex = (e) => e.
  // todo.findIndex(findTodoIndex(1));
  return (
    <Container>
      <Head id={id} setId={setId} pw={pw} setPw={setPw} login={login} />
      <TodoItems
        todo={todo}
        setTodo={setTodo}
        onChangeChk={onChangeChk}
        onRemoveItem={onRemoveItem}
        todoItem={todoItem}
      />
      <CreateTodo onChange={onChange} onAddTodo={onAddTodo} text={text} />
    </Container>
  );
}

export default TodoApp;
