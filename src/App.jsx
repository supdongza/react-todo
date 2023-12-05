import styled from "styled-components";
import SectionBox from "./components/@common/SectionBox";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const FILTERS = ["All", "Active", "Completed"];
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);

  const handleFilterClick = (event) => {
    setActiveFilter(event.target.innerText);
  };

  return (
    <DarkModeProvider>
      <StyledWrap>
        <SectionBox>
          <Header
            filters={FILTERS}
            activeFilter={activeFilter}
            handleFilterClick={handleFilterClick}
          />
          <Todo activeFilter={activeFilter} />
        </SectionBox>
      </StyledWrap>
    </DarkModeProvider>
  );
}

export default App;

const StyledWrap = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 1.2rem;
  background: rgb(81, 87, 111);
  background: linear-gradient(
    106deg,
    rgba(81, 87, 111, 1) 0%,
    rgba(60, 61, 69, 1) 100%
  );
`;
