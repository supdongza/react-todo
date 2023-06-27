import React, { useEffect, useState } from "react";
import TodoEditor from "../../components/todoEditor/TodoEditor";
import TodoList from "../../components/todoList/TodoList";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState(() => {
    const getData = window.localStorage.getItem("todoStorage");
    if (getData !== null) {
      return JSON.parse(getData);
    } else {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("todoStorage", JSON.stringify(todoList));

    // 고유 ID 부여
    todoList.forEach((obj: any, index: any) => {
      obj.id = index;
    });
  }, [todoList]);

  return (
    <>
      <TodoEditor setTodoList={setTodoList} todoList={todoList} />
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </>
  );
};

export default TodoContainer;
