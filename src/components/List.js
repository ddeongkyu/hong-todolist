import React from "react";
import styled from "styled-components";
import TodoItem from "./Item";

const ListTodo = styled.div`
  width: 100%;
  height: auto;
  font-size: 25px;
`;

function TodoItems({ todo = [], setTodo, onRemove }) {
  return (
    <ListTodo>
      {todo.map((todoItem) => (
        <TodoItem
          todoItem={todoItem}
          onRemove={onRemove}
          key={todoItem.id}
          todo={todo}
          setTodo={setTodo}
        ></TodoItem>
      ))}
    </ListTodo>
  );
}

export default TodoItems;
