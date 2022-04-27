import React, { useEffect } from "react";
import Container from "./Container";
import CreateTodo from "./Create";
import Head from "./Head";
import TodoItems from "./List";
import generateRandomTodoId from "../util/generateRandomTodoId";
import { useNavigate } from "react-router-dom";

function TodoApp({ id, todo, setTodo, text, setText, todoItem, login }) {
  // Since getting an id from localStorage is async, id can be null at first.
  // And then it becomes valid after the first render once it's fetched from localStorage.
  // Moreover, we don't need to do any logic hereif there's no id (if there's no loggedInUser)
  // from -HONG;

  useEffect(() => {
    const bringLoginId = JSON.parse(window.localStorage.getItem(login)).id;
    const refreshTodo = JSON.parse(
      window.localStorage.getItem(bringLoginId)
    ).todo;
    setTodo(refreshTodo);
    if (!id) return;
    if (
      window.localStorage.getItem(login) !== null &&
      JSON.parse(window.localStorage.getItem(id).todo !== null)
    ) {
      const getData = JSON.parse(window.localStorage.getItem(id));
      getData.todo = todo;
      window.localStorage.setItem(id, JSON.stringify(getData));
      setTodo(todo);
    }
  }, []);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onAddTodo = (e) => {
    e.preventDefault();
    if (text === "") {
      return null;
    } else {
      const nextTodo = [
        ...todo,
        { id: generateRandomTodoId(), text, isDeleted: false },
      ];
      const finalTodo = nextTodo.filter((todo) => todo.isDeleted === false);
      const getLoginId = JSON.parse(window.localStorage.getItem(login)).id;
      const getData = JSON.parse(window.localStorage.getItem(getLoginId));
      getData.todo = finalTodo;
      window.localStorage.setItem(getLoginId, JSON.stringify(getData));
      setTodo(finalTodo);
      setText("");
    }
  };

  const onSave = () => {
    const bringLoginId = JSON.parse(window.localStorage.getItem(login)).id;
    const refrehTodo = JSON.parse(
      window.localStorage.getItem(bringLoginId)
    ).todo;
    const getData = JSON.parse(window.localStorage.getItem(bringLoginId));
    getData.todo = todo;
    window.localStorage.setItem(bringLoginId, JSON.stringify(getData));
    setTodo(refrehTodo);
  };

  const onRemoveItem = (id) => {
    const removeTodo = todo.filter((todo) => todo.id !== id);
    setTodo(removeTodo);
    const getLoginId = JSON.parse(window.localStorage.getItem(login)).id;
    const getData = JSON.parse(window.localStorage.getItem(getLoginId));
    getData.todo = removeTodo;
    window.localStorage.setItem(getLoginId, JSON.stringify(getData));
  };

  let navigate = useNavigate();
  const onHeadClick = () => {
    localStorage.removeItem(login);
    setTodo([]);
    alert(id + "님 다음에 또 만나요!!!!");
    navigate("/");
  };

  const isDeletedChange = (todoId) => {
    // 1. 클릭된 투두 아이템을 가지고

    // map vs forEach 차이점 아는게 엄청 중요해.

    // 2. 그 투두 아이템의 isDeleted = true로 바꾸고
    const newTodo = todo.map((item) => {
      // id 매치되는걸 찾아서 isDeleted = treu로 바꾼다.
      if (item.id === todoId) {
        return {
          ...item,
          isDeleted: true
        }
      }
      // 2. 매치되는 아이디를 제외한 나머지 아이템들은 아무것도 안하고 그 상태 그대로 리턴한다.
      return item;
    })
    setTodo(newTodo)
    onSave()

    // 3. 전체 투두에 업데이트 한다.
    // if (e.target.checked) {
    //   for (let i = 0; i < todo.length; i++) {
    //     todo[i].isDeleted = true;
    //     console.log(todo[i].isDeleted);
    //     console.log(todo);
    //     // console.log(todo[i]);
    //     // todo[i].isDeleted = true;
    //     // e.currentTarget = todo[i].isDeleted;
    //     // console.log(e.target.value);
    //   }
    //   onSave();
    //   console.log("??");
    //   // console.log(e.target.checked);
    //   // todo[0].isDeleted = true;
    //   // console.log(todo.length);
    // } else if (!e.target.checked) {
    //   // console.log(e.target.checked);
    //   // console.log(todo.length);
    //   // todo[0].isDeleted = false;
    //   console.log("###");
    //   onSave();
    // }
  };
  return (
    <Container>
      <Head onHeadClick={onHeadClick} />
      <TodoItems
        todo={todo}
        onRemoveItem={onRemoveItem}
        todoItem={todoItem}
        isDeletedChange={isDeletedChange}
      />
      <CreateTodo onChange={onChange} onAddTodo={onAddTodo} text={text} />
    </Container>
  );
}
export default TodoApp;
