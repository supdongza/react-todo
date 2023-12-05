import React from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

const Item = ({ todo, handleUpdate, handleDelete }) => {
  const { id, title, state } = todo;

  const handleChange = () => {
    handleUpdate(id, state);
  };

  const handleClick = () => {
    handleDelete(id);
  };

  return (
    <StyledWrap>
      <StyledInput type="checkbox" onChange={handleChange} checked={state} />
      <span>{title}</span>
      <StyledButton type="button" onClick={handleClick}>
        <AiOutlineDelete />
      </StyledButton>
    </StyledWrap>
  );
};

export default Item;

const StyledWrap = styled.li`
  display: flex;
  align-items: center;
  span {
    font-family: monospace;
  }
  & + & {
    margin-top: 10px;
  }
`;

const StyledInput = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin-left: auto;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background-color: gray;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #fff;
  }
`;
