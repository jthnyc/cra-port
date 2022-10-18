import styled from "styled-components";
import { device } from "../device";
// import Image from "next/image";
// import profile from "../public/images/profile.png";

export const About = () => {
  return (
    <AboutSection>
      <h2 id="About">About Me</h2>
      <AboutContent>
        <AboutText>
          <p>
            Hey there! I'm Joanna and I enjoy creating pixel perfect things for
            the web. As a former teacher, I saw there was a gap between how
            educational software was meant to be used and how it's actually used
            in the classroom. Born out of a desire to bridge that gap, I set out
            to hone my skills as a developer and coded my first function to loop
            over an array as part of my application to Flatiron School's Mobile
            Dev Corps to learn iOS Development via Swift.
          </p>
          <p>
            Upon graduation, there was an immediate need at a music education
            startup I previously interned at. As their mission aligned with my
            interests, I transitioned to business development while still coding
            on the side. Fast forward two years later, my aspiration to be a
            better developer prompted me to take a deep dive into full stack web
            development through Fullstack Academy's Grace Hopper program in
            2020.
          </p>
          <p>
            I've had the privilege of working at the Born group since the start
            of 2021. My main focus at this time is building accessible and
            bespoke digital experiences for our clients.
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
          {/* <Image src={profile} width={420} height={500} /> */}
        </ImageContainer>
      </AboutContent>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  max-width: 1000px;
  align-items: flex-start;
  & p {
    margin-top: 2rem;
    line-height: 1.5rem;
  }
  @media ${device.md} {
    & p {
      margin-top: 1.5rem;
      max-width: 20rem;
    }
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 5rem;
  @media ${device.md} {
    display: block;
  }
`;

const AboutText = styled.div`
  @media ${device.md} {
    margin-bottom: 50px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 5;
`;

const TechList = styled.div`
  margin-top: 2rem;
  font-weight: 800;
  & ul {
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 1rem 5rem;
    @media ${device.md} {
      display: flex;
      flex-direction: column;
      padding-left: 0rem;
    }
  }
`;
