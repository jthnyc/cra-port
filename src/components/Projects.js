import styled from "styled-components";
import Project from "./Project";
import theshoppies from "../images/theshoppies.png";
import wanderlust from "../images/wanderlust.png";
import yearonemovieratings from "../images/yearonemovieratings.png";
import lalalime from "../images/lalalime.png";
import { device } from "../device";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t, ready } = useTranslation("projects");
  if (!ready) return <p>Loading translations...</p>;
  const projects = [
    {
      id: 1,
      img: yearonemovieratings,
      title: t("p1"),
      description: t("p1-descriptor"),
      github: "https://github.com/jthnyc/yo-ratings",
      link: "http://yo-ratings-git-main.joannathuang.vercel.app/",
    },
    {
      id: 2,
      img: theshoppies,
      title: t("p2"),
      description: t("p2-descriptor"),
      github: "https://github.com/jthnyc/movie-nom-app",
      link: "https://movie-nom-app.vercel.app/",
    },
    {
      id: 3,
      img: wanderlust,
      title: t("p3"),
      description: t("p3-descriptor"),
      github: "https://github.com/gh-wanderlust/wanderlust",
      link: "https://github.com/gh-wanderlust/wanderlust",
    },
    {
      id: 4,
      img: lalalime,
      title: t("p4"),
      description: t("p4-descriptor"),
      stack: "",
      github: "https://github.com/jthnyc/LaLaLime",
      link: "https://github.com/jthnyc/LaLaLime",
    },
  ];
  
  return (
    <ProjectSection id="projects">
      <h2>Projects</h2>
      <ProjectsContainer>
        {projects.map((project) => (
          <Project {...project} key={project.id} />
        ))}
      </ProjectsContainer>
    </ProjectSection>
  );
};

export default Projects;

const ProjectSection = styled.section`
  max-width: 62.5rem;
  align-items: flex-start;
  display: flex;
  color: #edf5e1;
  padding: 0 2rem;
  
  & h2 {
    margin-top: 10rem;
    margin-bottom: 2rem;
  }
  @media ${device.sm} {
    & h2 {
      margin-top: 6rem;
    }
  }
`;

const ProjectsContainer = styled.ul`
  padding: 0;
  margin: 0;
`;
