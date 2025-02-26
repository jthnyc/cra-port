import styled from "styled-components";
import { device } from "../device";
import { profile } from '../images';


export const About = () => {
  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <AboutContent>
        <AboutText>
          <p>
            Hey there! I'm Joanna—a frontend engineer passionate about crafting 
            pixel-perfect, accessible, and engaging web experiences.
          </p>
          <p>
            My journey into tech began in the <strong>classroom, not the code editor</strong>. As a former music teacher, 
            I saw how educational software often missed the mark for students and educators.
            Determined to bridge that gap, I transitioned into software development, 
            starting with <strong>iOS development</strong> through Flatiron School's Mobile Dev Corps, 
            where I honed my skills in Swift.
          </p>
          <p>
            After graduating, I joined a <strong>music education startup</strong>, leading APAC business 
            development while continuing to code on the side. But my growing passion 
            for development led me to take another deep dive—this time into <strong>full-stack 
            web development</strong> through the Grace Hopper program at Fullstack Academy.
          </p>
          <p>
            Since then, I've had the privilege of building <strong>bespoke, high-traffic digital experiences</strong>, 
            for global brands at <strong>BORN Group</strong>. Most notably, I've contributed to <strong>
            Converse's global platform</strong>, where I <strong>optimized checkout flows,
            product details, and account management</strong> for an e-commerce site serving <strong>~12M monthly visitors</strong>.
            I also led the modernization of <strong>legacy frontend architecture</strong>, implmenting <strong>React 
            and Redux-based components</strong> to improve site performance and maintainability.
          </p>
          <p>
            Now, I'm excited to keep <strong>pushing the boundaries of frontend development</strong> collaborating 
            with teams that build <strong>high-quality, scalable web experiences</strong>, 
            and solving real-world problems through code.
          </p>
          <br></br>
          <h3>🛠 Technologies I Work With</h3>
          <TechList>
            <div>
              <h4>Frontend</h4>
              <List>
                <li>React, Redux, Context API, React Hooks</li>
                <li>JavaScript (ES6+), TypeScript</li>
                <li>HTML, ISML</li>
              </List>
            </div>
            <div>
              <h4>Backend</h4>
              <List>  
                <li>Node.js, Express.js</li>
                <li>RESTful APIs</li>
                <li>PostgreSQL, Sequelize</li>
              </List>
            </div>
            <div>
              <h4>Dev & Build Tools</h4>
              <List> 
                <li>Git, Webpack</li>
                <li>Heroku, Vercel</li>
                <li>SalesForce Commerce Cloud</li>
              </List>
            </div>
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
`;

const List = styled.ul`
  & li {
    list-style-type: circle;
  }
`;
