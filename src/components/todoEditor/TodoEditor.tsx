import React from "react";
import styled from "styled-components";

const TodoEditor = () => {
  return (
    <StyledWrap>
      <StyledTitle>새로운 Todo 작성하기</StyledTitle>
      <StyledInner>
        <StyledInput type="text" placeholder="새로운 Todo..."></StyledInput>
        <StyledAddButton type="button">추가</StyledAddButton>
      </StyledInner>
    </StyledWrap>
  );
};

export default TodoEditor;

const StyledWrap = styled.article``;
const StyledTitle = styled.h2``;
const StyledInner = styled.div``;
const StyledInput = styled.input``;
const StyledAddButton = styled.button``;
