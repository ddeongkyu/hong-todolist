import React, { useState } from "react";
import styled from "styled-components";
import { HiX } from "react-icons/hi";
import "../App.css";

const Remove = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  color: #d2ee2e6;
  cursor: pointer;
`;
const Text = styled.div`
  flex: 1;
  font-size: 23px;
  color: #495057;
`;
const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.1s linear;
  }
`;

function TodoItem({ todoItem, onRemoveItem, isDeletedChange }) {
  const [style, setStyle] = useState("nonText");
  const onChangeStyle = (e) => {
    if (e.target.checked) {
      setStyle("yesText");
    } else if (!e.target.checked) {
      setStyle("nonText");
    }
  };

  return (
    <ItemBlock>
      <input
        type="checkbox"
        onClick={onChangeStyle}
        onChange={() => isDeletedChange(todoItem.id)}
      />
      <Text className={style}>{todoItem.text}</Text>
      <Remove>
        <HiX onClick={() => onRemoveItem(todoItem.id)} />
      </Remove>
    </ItemBlock>
  );
}
export default React.memo(TodoItem);
