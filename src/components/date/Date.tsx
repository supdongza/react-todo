import React from "react";
import styled from "styled-components";

const Date = () => {
  return (
    <StyledWrap>
      <StyledTitle>오늘은 🗓</StyledTitle>
    </StyledWrap>
  );
};

export default Date;

const StyledWrap = styled.article``;
const StyledTitle = styled.h2``;
