import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledWrap>
      <StyledTitle>오늘은 🗓</StyledTitle>
      <StyledDateText>Mon Jan 02 2023</StyledDateText>
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
