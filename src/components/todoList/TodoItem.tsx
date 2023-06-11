import React from "react";
import styled from "styled-components";

interface Props {
  data: any;
  onDelete: (index: number) => void;
  onChecked: (index: number) => void;
}

const TodoItem = ({ data, onDelete, onChecked }: Props) => {
  // 할일 체크
  const handleChangeCheckbox = () => {
    onChecked(data.id);
  };

  // 할일 삭제
  const handleClickDelete = () => {
    onDelete(data.id);
  };

  console.log(data.isChecked);

  return (
    <StyledItem>
      <StyledCheckbox
        type="checkbox"
        onChange={handleChangeCheckbox}
        checked={data.isChecked}
      />
      <StyledTextBox>
        <StyledText isChecked={data.isChecked}>{data.text}</StyledText>
        <StyledDate isChecked={data.isChecked}>{data.createdDate}</StyledDate>
      </StyledTextBox>

      <StyledDeleteButton type="button" onClick={handleClickDelete}>
        삭제
      </StyledDeleteButton>
    </StyledItem>
  );
};

export default TodoItem;

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  padding: 25px 0;

  & + & {
    border-top: 1px solid #ddd;
  }
`;
const StyledCheckbox = styled.input``;
const StyledTextBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
`;
const StyledText = styled.span<{ isChecked: boolean }>`
  color: ${({ isChecked }) => (isChecked ? "#ddd" : "#000")};
`;
const StyledDate = styled.span<{ isChecked: boolean }>`
  color: ${({ isChecked }) => (isChecked ? "#ddd" : "#000")};
`;
const StyledDeleteButton = styled.button`
  border: 0;
  height: 40px;
  padding: 0 15px;
  border-radius: 5px;
`;
