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

const StyledWrap = styled.div``;
const StyledTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: #1f93ff;
`;
const StyledDateText = styled.strong`
  display: block;
  font-weight: 600;
  font-size: 50px;
`;
