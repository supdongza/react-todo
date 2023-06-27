import React, { useState } from "react";
import styled from "styled-components";
import { ITodoList } from "../../@types/todo";

const TodoEditorInput = ({ setTodoList, todoList }: ITodoList) => {
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
    <>
      <StyledInput
        type="text"
        placeholder="새로운 Todo..."
        onChange={handleInputChange}
        value={isValue}
      ></StyledInput>
      <StyledAddButton type="button" onClick={handleAddClick}>
        추가
      </StyledAddButton>
    </>
  );
};

export default TodoEditorInput;

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
