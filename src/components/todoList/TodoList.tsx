import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

interface Props {
  setTodoList: any;
  todoList: Array<string>;
}

const TodoList = ({ setTodoList, todoList }: Props) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  // 필터 기능
  const getSearchResult = () => {
    const result =
      search === ""
        ? todoList
        : todoList.filter((item: any) =>
            item.text.toLowerCase().includes(search)
          );

    return result;
  };

  // 삭제 기능
  const onDelete = (targetID: number) => {
    setTodoList(todoList.filter((item: any) => item.id !== targetID));
  };

  // 체크 기능
  const onChecked = (targetID: number) => {
    setTodoList(
      todoList.map((item: any) =>
        item.id === targetID ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <StyledWrap>
      <StyledTitle>Todo List</StyledTitle>
      <StyledInner>
        <StyledInput
          type="text"
          placeholder="검색어를 입력하세요."
          onChange={onChangeSearch}
        ></StyledInput>
        <StyledList>
          {/* {todoList.map((item, index) => {
            return <TodoItem key={index} data={item} />;
          })} */}
          {getSearchResult().map((item, index) => {
            return (
              <TodoItem
                key={index}
                data={item}
                onDelete={onDelete}
                onChecked={onChecked}
              />
            );
          })}
        </StyledList>
      </StyledInner>
    </StyledWrap>
  );
};

export default TodoList;

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
  flex-direction: column;
`;
const StyledInput = styled.input`
  flex: 1;
  border: 0;
  border-bottom: 1px solid #000;
  padding: 15px;
  &:focus {
    outline: none;
    border-color: #1f93ff;
  }
`;
const StyledList = styled.ul`
  margin-top: 20px;
`;
