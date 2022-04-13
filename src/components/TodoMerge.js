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
      // setTodo(todo.filter((todo) => todo.id !== false));
    }
  };

  const onChangeChk = (e) => {
    for (let i = 1; i < todo.length; i++) {
      console.log(todo[i]);
    }
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
  console.log(todo);
  // console.log(todo[0].index);
  // const findTodoIndex = (e) => e.
  // todo.findIndex(findTodoIndex(1));
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
