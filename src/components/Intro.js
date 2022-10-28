import styled from "styled-components";
import { device } from "../device";

const Intro = () => {
  return (
    <HeroSection>
      <code>Hey, my name is</code>
      <h2>Joanna Huang.</h2>
      <h2>I'm a Front End Developer.</h2>
      <p>
        I was a music teacher who made a career switch to tech. Currently, I'm
        building highly customized SFCC e-commerce sites at the{" "}
        <a
          href="https://www.borngroup.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Born Group
        </a>
        .
      </p>
    </HeroSection>
  );
};

export default Intro;

const HeroSection = styled.section`
  max-width: 62.5rem;
  & code {
    color: white;
  }
  & a {
    color: var(--lightorange);
    font-weight: bold;
  }
  & code {
    margin: 0 0 1.875rem 0;
  }
  & h2 {
    font-size: 3rem;
  }
  & p {
    margin-top: 2rem;
    max-width: 38rem;
    line-height: 1.5rem;
  }
  @media ${device.sm} {
    padding-top: 7.5rem;
  }
`;
