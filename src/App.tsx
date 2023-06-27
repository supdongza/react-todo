import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import TodoContainer from "./components/todoContainer/TodoContainer";

function App() {
  return (
    <>
      <Reset />
      <StyledWrap>
        <StyledTitle>투두리스트</StyledTitle>
        <Header />
        <TodoContainer />
      </StyledWrap>
    </>
  );
}

export default App;

const StyledWrap = styled.main`
  max-width: 500px;
  width: 100%;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

const StyledTitle = styled.h1`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;
