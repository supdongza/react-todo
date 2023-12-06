import React, { useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import Form from "../form/Form";
import List from "./List";
import { DarkModeContext } from "../../context/DarkModeContext";
import todoReducer from "../../reducer/todo-reducer";

const Todo = ({ activeFilter }) => {
  const [todo, dispatch] = useReducer(todoReducer, getTodoList());
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todo));
  }, [todo]);

  const handleAdd = (title) => {
    dispatch({ type: "add", title });
  };

  const handleUpdate = (id, state) => {
    dispatch({ type: "update", id, state });
  };

  const handleDelete = (id) => {
    dispatch({ type: "deleted", id });
  };

  return (
    <StyledWrap className={darkMode && "darkMode"}>
      <StyledInner>
        {todo.length === 0 ? (
          <StyledText>오늘 할일을 내일로 미루지 말자.</StyledText>
        ) : (
          <List
            todoList={todo}
            activeFilter={activeFilter}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        )}
      </StyledInner>

      <Form handleAdd={handleAdd} />
    </StyledWrap>
  );
};

export default Todo;

function getTodoList() {
  const todoList = localStorage.getItem("todoList");
  return !!todoList ? JSON.parse(todoList) : [];
}

const StyledWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black !important;
  &.darkMode {
    background-color: rgb(38, 40, 65);
    color: white !important;
  }
`;

const StyledInner = styled.div`
  flex: 1;
`;
const StyledText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
`;
