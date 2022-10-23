import styled from "styled-components";
import { device } from "../device";
import { GitHub, ExternalLink } from "react-feather";
// import Image from "next/image";
import Link from "next/link";

const Project = ({ title, img, description, stack, github, link }) => {
  return (
    <ProjectContainer>
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectStack>{stack}</ProjectStack>
        <ProjectLinks>
          <Link href={github}>
            <a href target="_blank" rel="noreferrer noopener">
              <GitHub />
            </a>
          </Link>
          <Link href={link}>
            <a href target="_blank" rel="noreferrer noopener">
              <ExternalLink />
            </a>
          </Link>
        </ProjectLinks>
      </ProjectContent>
      <ProjectImageContainer>
        <a href={link} target="_blank" rel="noreferrer noopener">
          <ProjectImage src={img} alt={img} />
          {/* <Image src={img} width={640} height={450} /> */}
        </a>
      </ProjectImageContainer>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  gap: 0.625rem;
  &:nth-child(odd) {
    // &:first-child {
    //   grid-area: 1 / 6 / -1 / -1;
    // }
    // &:last-child {
    //   grid-area: 1 / 1 / -1 / 5;
    // }
  }
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

  @media ${device.lg} {
  }

  @media ${device.sm} {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

const ProjectContent = styled.div`
  grid-column: 7/-1;
  position: relative;
  grid-area: 1 / 1 / -1 / 5;
  @media ${device.lg} {
    grid-area: 1 / 1 / 1 / 11;
    z-index: 10;
    margin-left: 15px;
  }
`;

const ProjectImageContainer = styled.div`
  grid-column: 1/8;
  box-shadow: 0 0.625rem 1.875rem -0.9375rem;
  grid-area: 1 / 6 / -1 / -1;
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
  color: #ff9b71;
  z-index: 1;
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
`;

const ProjectStack = styled.code`
  padding: 1rem 1rem;
  padding-left: 0rem;
  height: 4rem;
  color: white;
  z-index: 1;
  @media ${device.md} {
    padding: 1rem 0rem;
  }
`;

const ProjectLinks = styled.div`
  margin-top: 1.25rem;
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
`;
