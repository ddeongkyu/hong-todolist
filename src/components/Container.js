import React from "react";
import styled from "styled-components";

const ContainerTodo = styled.div`
  width: 400px;
  height: 100%;

  position: relative;
  background: white;
  border-radius: 15px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function Container({ children }) {
  return <ContainerTodo>{children}</ContainerTodo>;
}

export default Container;
