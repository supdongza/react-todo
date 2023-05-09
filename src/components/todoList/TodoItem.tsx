import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  data: any;
}

const TodoItem = ({ data }: Props) => {
  const [isChecked, setIsChecked] = useState(data.isCheck);

  const handleChange = (e: any) => {
    setIsChecked(true);
    data.isCheck = e.target.checked;
  };

  return (
    <StyledItem>
      <StyledCheckbox type="checkbox" onChange={handleChange} />
      <StyledText>{data.text}</StyledText>
      <StyledDeleteButton type="button">삭제</StyledDeleteButton>
    </StyledItem>
  );
};

export default TodoItem;

const StyledItem = styled.li``;
const StyledCheckbox = styled.input``;
const StyledText = styled.span``;
const StyledDeleteButton = styled.button``;
