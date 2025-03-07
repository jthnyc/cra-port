import styled from "styled-components";
import { device } from "../device";
import { GitHub, ExternalLink } from "react-feather";

const Project = ({ title, img, description, github, link }) => {
  return (
    <ProjectContainer>
      <ProjectContent>
        <ProjectDetails>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectLinks>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <GitHub />
            </a>
            <a href={link} target="_blank" rel="noreferrer noopener">
              <ExternalLink />
            </a>
          </ProjectLinks>
        </ProjectDetails>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectContent>
      <ProjectImageContainer>
        <a href={link} target="_blank" rel="noreferrer noopener">
          <ProjectImage src={img} alt={img} />
        </a>
      </ProjectImageContainer>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.li`
  position: relative;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  gap: 0.625rem;
  & > a {
    margin: 1rem 1rem;
    transition: all 0.125s ease;
    color: #edf5e1;
    &:hover {
      color: #ff7f11;
    }
  }
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
  
  &:nth-child(2n + 2)>div:first-child {
    grid-area: 1 / 9 / -1 / -1;
  }

  &:nth-child(2n + 2)>div:nth-child(2) {
    grid-area: 1 / 1 / -1 / 7;
  }

  @media ${device.lg} {
    &:nth-child(2n + 2)>div:first-child {
      grid-area: 1 / 7 / -1 / -1;
    }
  }

  @media ${device.md} {
    &:nth-child(2n + 2)>div:first-child {
      grid-area: 1 / 1 / 1 / 11;
      z-index: 10;
      margin-left: 0.9375rem;
    }

    &:nth-child(2n + 2)>div:nth-child(2) {
      grid-area: 1 / 1 / -1 / -1;
      z-index: 1;
      opacity: 0.3;
    }
  }
`;

const ProjectContent = styled.div`
  position: relative;
  grid-area: 1 / 1 / -1 / 6;
  @media ${device.lg} {
    grid-area: 1 / 1 / 1 / 11;
    z-index: 10;
    margin-left: 0.9375rem;
  }
`;

const ProjectDetails = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectImageContainer = styled.div`
  grid-column: 1/8;
  box-shadow: 0 0.625rem 1.875rem -0.9375rem;
  grid-area: 1 / 7 / -1 / -1;
  position: relative;
  z-index: 1;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }

  @media ${device.md} {
    grid-area: 1 / 1 / -1 / -1;
    z-index: 1;
    opacity: 0.3;
  }
`;

const ProjectImage = styled.img`
  max-width: 120%;
  z-index: 9;

  @media ${device.md} {
    max-width: 100%;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.2em;
  margin: 1.25rem 0rem;
  display: flex;
  color: var(--lightorange);
  z-index: 1;

  @media ${device.sm} {
    margin: .5rem 0;
  }
`;

const ProjectDescription = styled.p`
  padding: 0rem 1rem 2rem;
  padding-left: 0rem;
  height: 4rem;
  width: 120%;
  color: white;
  z-index: 1;

  @media ${device.md} {
    padding: 0rem 1rem 1rem;
    padding-left: 0rem;
  }

  @media ${device.sm} {
    margin-bottom: 1.5rem;
    padding: 0;
    height: 2rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  & > a {
    color: white;
    padding: 0.625rem 0.625rem 0.625rem 0rem;
    &:hover {
      color: #ff7f11;
    }
  }

  @media ${device.sm} {
    margin-top: .5rem;
  }
`;