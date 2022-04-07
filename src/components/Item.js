import React from "react";
import styled from "styled-components";
import { BsEraserFill } from "react-icons/bs";

const Remove = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  color: #d2ee2e6;
  cursor: pointer;
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
`;
const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

function Item({ todoItem, todo, setTodo }) {
  const onRemove = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <ItemBlock>
        <Text>{todoItem.text}</Text>
        <Remove>
          <BsEraserFill onClick={() => onRemove(todoItem.id)} />
        </Remove>
      </ItemBlock>
    </>
  );
}

export default React.memo(Item);
