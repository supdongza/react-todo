import React from "react";
import styled from "styled-components";

const TodoItem = () => {
  return (
    <StyledItem>
      <StyledCheckbox type="checkbox" />
      <StyledText>React 공부하기</StyledText>
      <StyledDeleteButton type="button">삭제</StyledDeleteButton>
    </StyledItem>
  );
};

export default TodoItem;

const StyledItem = styled.li``;
const StyledCheckbox = styled.input``;
const StyledText = styled.span``;
const StyledDeleteButton = styled.button``;
