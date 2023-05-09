import React, { useState, useRef } from "react";
import styled from "styled-components";

interface Props {
  setTodoList: any;
  todoList: Array<string>;
}

const TodoEditor = ({ setTodoList, todoList }: Props) => {
  const [isValue, setIsValue] = useState("");

  const handleInputChange = (e: any) => {
    setIsValue(e.target.value);
  };

  const handleAddClick = (e: any) => {
    e.preventDefault();

    if (isValue === "") {
      alert("텍스트를 입력해주세요");
      return;
    }
    setTodoList([...todoList, { isCheck: false, text: isValue }]);
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
