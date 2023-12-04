import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Form from "../form/Form";
import List from "./List";

const Todo = ({ activeFilter }) => {
  const [todo, setDodo] = useState([]);

  const handleAddTodo = useCallback((title) => {
    setDodo((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        state: false,
      },
    ]);
  }, []);

  const handleUpdate = useCallback(
    (id, state) => {
      setDodo(
        todo.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              state: !state,
            };
          }
          return todo;
        })
      );
    },
    [todo]
  );

  const handleDelete = useCallback(
    (id) => {
      setDodo(todo.filter((todo) => todo.id !== id));
    },
    [todo]
  );

  return (
    <StyledWrap>
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

      <Form handleAddTodo={handleAddTodo} />
    </StyledWrap>
  );
};

export default Todo;

const StyledWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: rgb(38, 40, 65);
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
