import React, { useState } from "react";
import Container from "./components/Container";
import CreateTodo from "./components/Create";
import Head from "./components/Head";
import TodoItems from "./components/List";
import generateRandomTodoId from "./util/generateRandomTodoId";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onAddTodo = (e) => {
    e.preventDefault();
    if (text === "") {
      return null;
    } else {
      const nextTodo = [...todo, { id: generateRandomTodoId(), text }];
      // const nextTodo = todo.concat({ id: generateRandomTodoId(), text }) // 도 가능
      setTodo(nextTodo);
      setText("");
    }
  };

  return (
    <Container>
      <Head />
      <TodoItems todo={todo} setTodo={setTodo} />
      <CreateTodo onChange={onChange} onAddTodo={onAddTodo} text={text} />
    </Container>
  );
}

export default App;
