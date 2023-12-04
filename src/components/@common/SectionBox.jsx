import React from "react";
import styled from "styled-components";

const SectionBox = ({ children }) => {
  return <StyledWrap>{children}</StyledWrap>;
};

export default SectionBox;

const StyledWrap = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 500px;
  height: 600px;
  border-radius: 10px;
  background-color: gray;
`;
