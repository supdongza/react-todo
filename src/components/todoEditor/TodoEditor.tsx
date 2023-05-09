import React, { useState, useRef } from "react";
import styled from "styled-components";

interface Props {
  setTodoList: any;
  todoList: any;
}

const TodoEditor = ({ setTodoList, todoList }: Props) => {
  const [isValue, setIsValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsValue(e.target.value);
  };

  const handleAddClick = () => {
    if (isValue === "") return;

    setTodoList([
      ...todoList,
      { isCheck: false, text: isValue, createdDate: new Date().getTime() },
    ]);
    setIsValue("");
  };

  return (
    <StyledWrap>
      <StyledTitle>새로운 Todo 작성하기</StyledTitle>
      <StyledInner>
        <StyledInput
          type="text"
          placeholder="새로운 Todo..."
          onChange={handleInputChange}
          value={isValue}
        ></StyledInput>
        <StyledAddButton type="button" onClick={handleAddClick}>
          추가
        </StyledAddButton>
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
