import styled from "styled-components";
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
  Footer,
  WaveformDivider
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
          <WaveformDivider />
          <About />
          <WaveformDivider />
          <Projects />
          <WaveformDivider />
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
  padding: 0 clamp(1rem, 3vw, 2rem);  /* Mobile/tablet: conservative padding */
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
    margin: 0 auto;
    position: relative;
    z-index: 1;
    
    &:not(:last-of-type) {
      margin-bottom: 2rem;  /* Reduced from 3.5rem for mobile */
      
      @media (min-width: 768px) {
        margin-bottom: 3.5rem;  /* Keep original spacing on desktop */
      }
    }
  }
  
  @media (min-width: 768px) {
    padding: 0 clamp(3rem, 8vw, 6rem);  /* Desktop: reduced max from 10rem to 6rem */
  }
`;