import styled from "styled-components";
import { device } from "../device";
import profile from "../images/profile.png";

export const About = () => {
  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <AboutContent>
        <AboutText>
          <p>
            Hey there! I'm Joanna and I enjoy creating pixel perfect things for
            the web.
          </p>
          <p>
            As a former teacher, I saw a gap between how educational software
            was meant to be used and how it's actually used in the classroom.
            Out of a desire to address that gap, I set out to hone my skills as
            a developer and joined Flatiron School's Mobile Dev Corps, where I
            learned about iOS Development via Swift.
          </p>
          <p>
            After graduating, I joined a music education startup and my skills
            in business development while still coding on the side. Fast forward
            to 2020, my aspiration to be a better developer prompted me to take
            another deep dive, this time into full stack web development through
            the Grace Hopper program at Fullstack Academy.
          </p>
          <p>
            Since then, I've had the privilege to work at the Born group, where
            I build bespoke and accessible digital experiences for our clients.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <TechList>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>SCSS</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>SalesForce Commerce Cloud</li>
            </ul>
          </TechList>
        </AboutText>
        <ImageContainer>
          <img src={profile} alt="profile" />
        </ImageContainer>
      </AboutContent>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  max-width: 62.5rem;
  align-items: flex-start;
  & h2 {
    margin-top: 6rem;
  }

  & p {
    margin-top: 2rem;
    line-height: 1.5rem;
  }
  @media ${device.md} {
    & p {
      margin: 1.5rem 0 0 0;
    }
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 5rem;
  @media ${device.lg} {
    display: block;
  }
`;

const AboutText = styled.div`
  @media ${device.lg} {
    margin-bottom: 3.125rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 5;

  @media ${device.lg} {
    display: flex;
    justify-content: center;
  }

  @media ${device.md} {
    & img {
      max-width: 95%;
    }
  }
`;

const TechList = styled.div`
  margin-top: 2rem;
  font-weight: 800;
  & ul {
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 1rem 1rem;
    @media ${device.lg} {
      display: flex;
      flex-direction: column;
      padding-left: 0rem;
    }
  }
`;
