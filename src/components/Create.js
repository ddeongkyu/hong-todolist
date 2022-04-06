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
  align-items: center;
  justify-content: center;
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

function Create({ todo, setTodo }) {
  const [text, setText] = useState("");
  const changeInput = (e) => {
    setText(e.target.value);
    // console.log(e.target);
  };

  const clickButton = (e) => {
    e.preventDefault();
    const nextTodo = todo.concat({ id: todo.length, text });
    setTodo(nextTodo);
    setText("");
  };
  return (
    <form>
      <Input
        placeholder="할 일을 입력하세요."
        value={text}
        name="todoItem"
        onChange={changeInput}
      />

      <SquareButton type="button" onClick={clickButton}>
        등록
      </SquareButton>
    </form>
  );
}

export default React.memo(Create);
