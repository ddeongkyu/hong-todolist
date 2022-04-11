import React, { useState } from "react";
import Container from "./Container";
import CreateTodo from "./Create";
import Head from "./Head";
import TodoItems from "./List";
import generateRandomTodoId from "../util/generateRandomTodoId";

function TodoMerge() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onAddTodo = (e) => {
    e.preventDefault();
    // console.log(e.target);

    if (text === "") {
      return null;
    } else {
      const nextTodo = [...todo, { id: generateRandomTodoId(), text }];
      // const nextTodo = todo.concat({ id: generateRandomTodoId(), text }) // 도 가능
      setTodo(nextTodo);
      setText("");
    }

    const list = document.getElementById("box");
    const chkbox = document.querySelectorAll("#box .btn-chk");
    for (let i in chkbox) {
      if (chkbox[i].checked === true) {
        list.removeChild(chkbox[i].parentNode);
      }
    }
  };
  return (
    <Container>
      <Head />
      <TodoItems todo={todo} setTodo={setTodo} />
      <CreateTodo onChange={onChange} onAddTodo={onAddTodo} text={text} />
      {/* <button onClick={delChk}>zzz</button> */}
    </Container>
  );
}

export default TodoMerge;
