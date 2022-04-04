import React from "react";
import styled from "styled-components";

const HeadBlock = styled.div`
  padding: 5px;
  border-bottom: 1px solid #ffe3e3;
  h1 {
    margin: 0;
    font-size: 30px;
    color: #ffe3e3;
  }
`;

function Head() {
  return (
    <HeadBlock>
      <h1>TODOLIST!!!!!!!!!!</h1>
    </HeadBlock>
  );
}

export default Head;
