import styled from "styled-components";
import GlobalStyle from "../globalStyles";
// import Head from "next/head";
import NavBar from "../pages/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { device } from "../device";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Index() {
  return (
    <div>
      <GlobalStyle />
      {/* <Head> */}
      {/* <title>Joanna Huang</title>
      <meta name="description" content="Portfolio Site for Joanna Huang" />
      <script src="path/to/dist/feather.js"></script> */}
      {/* </Head> */}
      <Header>
        <NavBar />
      </Header>
      <Sidebar />
      <Main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Main>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  background-color: var(--prussianblue);
  padding: 0 10rem;
  width: 100%;
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
