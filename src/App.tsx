import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import TodoEditor from "./components/todoEditor/TodoEditor";
import TodoList from "./components/todoList/TodoList";

function App() {
  // NOTE : 새로고침 useState 초기화로..
  const [todoList, setTodoList] = useState(() => {
    const getData = window.localStorage.getItem("todoStorage");
    if (getData !== null) {
      return JSON.parse(getData);
    } else {
      return [];
    }
  });

  // NOTE : 처음 시도 했던 방법
  // const [todoList, setTodoList] = useState([]);
  // useEffect(() => {
  //   const localList = localStorage.getItem("todoStorage");

  //   if (localList !== null) {
  //     setTodoList(JSON.parse(localList));
  //   } else {
  //     window.localStorage.setItem("todoStorage", JSON.stringify([]));
  //   }
  // }, []);

  useEffect(() => {
    window.localStorage.setItem("todoStorage", JSON.stringify(todoList));

    // 고유 ID 부여
    todoList.forEach((obj: any, index: any) => {
      obj.id = index;
    });
  }, [todoList]);

  return (
    <>
      <Reset />
      <StyledWrap>
        <StyledTitle>투두리스트</StyledTitle>
        <Header />
        <TodoEditor setTodoList={setTodoList} todoList={todoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </StyledWrap>
    </>
  );
}

export default App;

const StyledWrap = styled.main`
  max-width: 500px;
  width: 100%;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

const StyledTitle = styled.h1`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;
