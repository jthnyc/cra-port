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
  Footer
} from "./components/index";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div>
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
        <Footer />
      </div>
    </div>
  );
}

export default App;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--offwhite);
  position: fixed;
  width: 100%;
  z-index: 1000;
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
    &:not(:last-of-type) {
      margin-bottom: 7.5rem;
    }
  }
  @media ${device.sm} {
    padding: 0 1.5rem;
    & > section {
      padding: 0rem;
      &:not(:last-of-type) {
        margin-bottom: 12.5rem;
      }
    }
  }
`;
