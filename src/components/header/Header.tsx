import React, { useEffect } from "react";
import styled from "styled-components";

// NOTE : 컴포넌트 재생성시 갱신되지 않아도 되는 값은 컴포넌트 밖으로 뺴준다.
const date = new Date().toDateString();

const Header = () => {
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
