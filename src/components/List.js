import React from "react";
import styled from "styled-components";
import Item from "./Item";
import Input from "./Create";

const ListTodo = styled.div`
  width: 100%;
  height: auto;
  background: none;
  font-size: 25px;
`;

function List({ todo, setTodo, todoTodo }) {
  return (
    <ListTodo>
      {todo &&
        todo.map((todoTodo) => (
          <Item
            key={todo.id}
            todoTodo={todoTodo}
            todo={todo}
            setTodo={setTodo}
          />
        ))}
    </ListTodo>
  );
}

export default List;
