import React, { useState } from "react";
import Container from "./components/Container";
import Create from "./components/Create";
import Head from "./components/Head";
import List from "./components/List";
function App() {
  const [todo, setTodo] = useState([]);
  return (
    <>
      <Container>
        <Head />
        <List todo={todo} setTodo={setTodo} />
        <Create todo={todo} setTodo={setTodo} />
      </Container>
    </>
  );
}

export default App;
