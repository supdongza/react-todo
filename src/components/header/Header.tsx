import React, { useEffect } from "react";
import styled from "styled-components";

const Header = () => {
  const date = new Date().toDateString();

  return (
    <StyledWrap>
      <StyledTitle>오늘은 🗓</StyledTitle>
      <StyledDateText>{date}</StyledDateText>
    </StyledWrap>
  );
};

export default Header;

const StyledWrap = styled.article``;
const StyledTitle = styled.h2``;
const StyledDateText = styled.strong`
  display: block;
  font-size: 20px;
`;
