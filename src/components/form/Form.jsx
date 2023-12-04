import React, { useState } from "react";
import styled from "styled-components";

const Form = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    handleAddTodo(value);
    setValue("");
  };

  const handleOnchange = (event) => {
    setValue(event.target.value);
  };

  return (
    <StyledWrap>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Add Todo..."
          value={value}
          onChange={handleOnchange}
        />
        <StyledSubmit>Add</StyledSubmit>
      </StyledForm>
    </StyledWrap>
  );
};
export default Form;

const StyledWrap = styled.div`
  padding: 20px;

  background-color: rgb(28, 30, 58);
`;
const StyledForm = styled.form`
  display: flex;
  overflow: hidden;
  height: 30px;
  border-radius: 4px;
`;
const StyledInput = styled.input`
  flex: 1;
  padding: 0 10px;
  border: 0;
`;
const StyledSubmit = styled.button`
  width: 80px;
  border: 0;
  background-color: rgb(228, 148, 73);
  color: #fff;
  cursor: pointer;
`;
