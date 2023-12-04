import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "./Item";

const List = ({ todoList, activeFilter, handleUpdate, handleDelete }) => {
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    const getTodoList = (type) => {
      switch (type) {
        case "Active": {
          return todoList.filter((todo) => !todo.state);
        }
        case "Completed": {
          return todoList.filter((todo) => todo.state);
        }
        default:
          return todoList;
      }
    };
    setFilterList(getTodoList(activeFilter));
  }, [todoList, activeFilter]);

  return (
    <StyledWrap>
      {filterList.map((todo) => {
        return (
          <Item
            key={todo.id}
            todo={todo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        );
      })}
    </StyledWrap>
  );
};

export default List;

const StyledWrap = styled.ul`
  flex: 1;
  padding: 20px;
`;
