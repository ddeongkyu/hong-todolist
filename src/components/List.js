import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ListTodo = styled.div`
  width: 100%;
  height: auto;
  background: none;
  font-size: 25px;
`;

function List({ todo, setTodo }) {
  return (
    <ListTodo>
      {todo &&
        todo.map((todoItem) => (
          <Item
            key={todoItem.id}
            todoItem={todoItem}
            todo={todo}
            setTodo={setTodo}
          ></Item>
        ))}
    </ListTodo>
  );
}

export default List;
