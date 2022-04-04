import React from "react";
import Container from "./components/Container";
import Create from "./components/Create";
import Head from "./components/Head";
import List from "./components/List";
function App() {
  return (
    <>
      <Container>
        <Head />
        <List />
        <Create />
      </Container>
    </>
  );
}

export default App;
