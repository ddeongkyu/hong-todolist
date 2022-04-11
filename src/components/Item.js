import React, { useState } from "react";
import styled from "styled-components";
import { HiX } from "react-icons/hi";

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
  &:hover {
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.1s linear;
  }
`;

function TodoItem({ todoItem, todo, setTodo }) {
  const [checked, setChecked] = useState(false);
  const onRemoveItem = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  const onChange = (e) => {
    setChecked(e.currentTarget.checked);
    // console.log(e.target.checked);
    // console.log(e.target);
    // console.log(checked);
  };
  return (
    <div>
      <ItemBlock id="box">
        <input
          className="btn-chk"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <Text style={{ textDecoration: checked && "line-through" }}>
          {todoItem.text}
        </Text>
        <Remove>
          <HiX onClick={() => onRemoveItem(todoItem.id)} />
        </Remove>
      </ItemBlock>
    </div>
  );
}

export default React.memo(TodoItem);
