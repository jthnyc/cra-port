import styled from "styled-components";
import { device } from "../device";
import { Greeting } from './';
import { spotify, duolingo, dumpling } from '../images';

const Intro = () => {
  return (
    <HeroSection>
      <Greeting />
      <h2>Frontend Engineer & Former Music Teacher</h2>
      <p>
        I turned my passion for teaching into crafting beautiful, high-performance web experiences.
        I specialize in scalable, user-friendly applications that bring designs to life.
        <br/><br/>
        When I'm not coding, you'll find me analyzing <ActivityIcon src={spotify} alt="Spotify"/> film soundtracks, keeping my <ActivityIcon src={duolingo} alt="duolingo" /> Italian and German streaks alive, or making dumplings <ActivityIcon src={dumpling} alt="dumpling" /> from scratch.
        <br/><br/>
        🚀 Let's build something amazing together!
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

const ActivityIcon = styled.img`
  max-width: 1.125rem;
`;
