import styled from "styled-components";
import { device } from "./device";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Intro,
  About,
  Sidebar,
  Projects,
  Contact,
} from "./components/index";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <Navbar />
      </Header>
      <Sidebar />
      <Main>
        <Intro />
        <About />
        <Projects />
        <Contact />
      </Main>
    </div>
  );
}

export default App;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  background-color: var(--prussianblue);
  padding: 0 10rem;
  width: 100%;
  height: 100%;
  & > section {
    background-color: var(--prussianblue);
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    color: #edf5e1;
    padding: 0rem;
    margin: 0 auto;
    &:not(last-child) {
      margin-bottom: 7.5rem;
    }
  }
  @media ${device.sm} {
    padding: 0;
    & > section {
      padding: 0 1.5rem;
      &:not(last-child) {
        margin-bottom: 12.5rem;
      }
    }
  }
`;
