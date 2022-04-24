import React from "react";
import styled from "styled-components";
import TodoItem from "./Item";

const ListTodo = styled.div`
  width: 100%;
  height: auto;
  font-size: 25px;
`;

function TodoItems({ todo = [], onRemoveItem, id, onSave }) {
  return (
    <ListTodo>
      {todo.map((todoItem) => (
        <TodoItem
          todoItem={todoItem}
          key={todoItem.id}
          onRemoveItem={onRemoveItem}
          id={id}
          onSave={onSave}
        />
      ))}
    </ListTodo>
  );
}

export default TodoItems;
