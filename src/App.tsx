import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import TodoEditor from "./components/todoEditor/TodoEditor";
import TodoList from "./components/todoList/TodoList";

interface MyData {
  isCheck: boolean;
  text: string;
}

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("todoInLocal");

    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      setTodoList(parsedData);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todoInLocal", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <Reset />
      <StyledWrap>
        <StyledTitle>투두리스트</StyledTitle>
        <Header />
        <TodoEditor setTodoList={setTodoList} todoList={todoList} />
        <TodoList todoList={todoList} />
      </StyledWrap>
    </>
  );
}

export default App;

const StyledWrap = styled.main`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
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
