import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { DarkModeContext } from "../../context/DarkModeContext";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";

const Header = ({ filters, activeFilter, handleFilterClick }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <StyledWrap className={darkMode && "darkMode"}>
      <StyledModeButton type="button" onClick={() => toggleDarkMode()}>
        {darkMode ? <FaRegLightbulb /> : <FaLightbulb />}
      </StyledModeButton>
      <StyledList>
        {filters.map((item, index) => (
          <StyledMenuButton
            key={index}
            type="button"
            styledActive={activeFilter === item}
            onClick={handleFilterClick}
          >
            {item}
          </StyledMenuButton>
        ))}
      </StyledList>
    </StyledWrap>
  );
};

export default Header;
const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  border-bottom: 1px solid rgb(62, 65, 83);
  background-color: rgb(246, 246, 246);

  &.darkMode {
    background-color: rgb(28, 30, 58);
  }
`;
const StyledModeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid rgb(28, 30, 58);
  border-radius: 50%;
  background: #fff;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledList = styled.div`
  display: flex;
  margin-left: auto;
  gap: 0 5px;
`;
const StyledMenuButton = styled.button`
  position: relative;
  border: 0;
  background: 0;
  font-size: 20px;
  color: ${(props) =>
    props.styledActive ? "rgb(228, 148, 73);" : "rgb(188,138,97)"};
  cursor: pointer;

  ${(props) =>
    props.styledActive &&
    css`
      /* font-weight: bold; */
      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: -2px;
        left: 0;
        border-bottom: 2px solid rgb(214, 216, 227);
      }
    `}
`;
