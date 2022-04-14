import React from "react";
import styled from "styled-components";
import TodoItem from "./Item";

const ListTodo = styled.div`
  width: 100%;
  height: auto;
  font-size: 25px;
`;

function TodoItems({
  todo = [],
  onRemove,
  onChangeChk,
  onRemoveItem,
  todoItem,
}) {
  return (
    <ListTodo>
      {todo.map((todoItem) => (
        <TodoItem
          todoItem={todoItem}
          onRemove={onRemove}
          key={todoItem.id}
          onChangeChk={onChangeChk}
          onRemoveItem={onRemoveItem}
        >
          {console.log(todoItem)}
        </TodoItem>
      ))}
    </ListTodo>
  );
}

export default TodoItems;
