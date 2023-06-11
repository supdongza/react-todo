import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface Props {
  setTodoList: any;
  todoList: Array<string>;
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
      {
        isChecked: false,
        text: isValue,
        createdDate: new Date().toLocaleDateString(),
      },
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
const StyledInput = styled.input`
  flex: 1;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 15px;
  &:focus {
    outline: none;
    border-color: #1f93ff;
  }
`;
const StyledAddButton = styled.button`
  flex-shrink: 0;
  width: 80px;
  height: 47px;
  border: 0;
  border-radius: 5px;
  background-color: #1f93ff;
  color: #fff;
  cursor: pointer;
`;
