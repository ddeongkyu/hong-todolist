import React from "react";
import styled from "styled-components";

const HeadBlock = styled.div`
  padding: 5px;
  border-bottom: 1px solid #3bc9db;
  h1 {
    margin: 0;
    font-size: 30px;
    color: #3bc9db;
    text-align: center;
    font-weight: bold;
  }
`;

function Head() {
  return (
    <HeadBlock>
      <h1>TODOLIST</h1>
    </HeadBlock>
  );
}

export default Head;
