import React, { useState } from "react";
import styled from "styled-components";

const SquareButton = styled.button`
  background: red;
  cursor: pointer;
  width: 50px;
  height: 40px;
  left: 87.5%;
  bottom: 0px;
  font-size: 15px;
  color: white;
  border: none;
  outline: none;
  position: absolute;
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  :focus-visible {
    outline: 2px solid red;
  }
`;

function Create({ text }) {
  return (
    <form>
      <Input placeholder="할 일을 입력해보시던가요" value={text} />
      <SquareButton>등록ㅋㅋ</SquareButton>
    </form>
  );
}

export default Create;
