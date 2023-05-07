import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <StyledWrap>
      <StyledTitle>Todo List</StyledTitle>
      <StyledInner>
        <StyledInput
          type="text"
          placeholder="검색어를 입력하세요."
        ></StyledInput>
        <StyledList>
          <TodoItem />
        </StyledList>
      </StyledInner>
    </StyledWrap>
  );
};

export default TodoList;

const StyledWrap = styled.article``;
const StyledTitle = styled.h2``;
const StyledInner = styled.div``;
const StyledInput = styled.input``;
const StyledList = styled.ul``;
