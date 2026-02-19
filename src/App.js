import styled from "styled-components";
import { device } from "./device";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ScrollIndicator,
  Navigation,
  MobileNav,
  LanguageSwitcher,
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
        <Navigation />
        <ScrollIndicator />
        <LanguageSwitcher />
        <MobileNav /> 
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

const Main = styled.main`
  background: linear-gradient(135deg, var(--prussianblue-dark) 0%, var(--prussianblue) 50%, var(--prussianblue-light) 100%);
  padding: 0 10rem;
  width: 100%;
  min-height: 100vh;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 50%, rgba(78, 205, 196, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
  
  & > section {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    color: #edf5e1;
    /* REMOVED: padding: 0rem; */
    margin: 0 auto;
    position: relative;
    z-index: 1;
    
    &:not(:last-of-type) {
      margin-bottom: 3.5rem;
    }
  }
  
  @media ${device.sm} {
    margin-left: 0;
    padding: 0 1rem;
  }
`;
