import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import TodoEditorInput from "./TodoEditorInput";
import { ITodoList } from "../../@types/todo";

const TodoEditor = ({ setTodoList, todoList }: ITodoList) => {
  return (
    <StyledWrap>
      <StyledTitle>새로운 Todo 작성하기</StyledTitle>
      <StyledInner>
        {/* NOTE : input onchange event 발생할때마다 todoEditor rerender 되어 TodoEditorInput 분리 */}
        <TodoEditorInput todoList={todoList} setTodoList={setTodoList} />
      </StyledInner>
    </StyledWrap>
  );
};

export default TodoEditor;

const StyledWrap = styled.div`
  margin-top: 50px;
`;
const StyledTitle = styled.h2`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 20px;
`;

const StyledInner = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
`;
