import styled from "styled-components";
import Project from "./Project";
import theshoppies from "../images/theshoppies.png";
import wanderlust from "../images/wanderlust.png";
import yearonemovieratings from "../images/yearonemovieratings.png";
import lalalime from "../images/lalalime.png";
import { device } from "../device";

const projects = [
  {
    id: 1,
    img: yearonemovieratings,
    title: "YearOne Movie Ratings",
    description: "Single page application to search and rate movies.",
    stack: "React, JavaScript, CSS, HTML, OMDB API, Vercel",
    github: "https://github.com/jthnyc/yo-ratings",
    link: "http://yo-ratings-git-main.joannathuang.vercel.app/",
  },
  {
    id: 2,
    img: theshoppies,
    title: "The Shoppies",
    description: "Single page application to search and nominate top 5 movies.",
    stack: "React, JavaScript, CSS, HTML, OMDB API, Vercel",
    github: "https://github.com/jthnyc/movie-nom-app",
    link: "https://movie-nom-app.vercel.app/",
  },
  {
    id: 3,
    img: wanderlust,
    title: "Wanderlust",
    description:
      "A web app for individuals to book rentals with other travelers.",
    stack:
      "Typescript, NextJS, React, Redux, Sequelize, PostgreSQL, Google Cloud SQL",
    github: "https://github.com/gh-wanderlust/wanderlust",
    link: "https://github.com/gh-wanderlust/wanderlust",
  },
  {
    id: 4,
    img: lalalime,
    title: "LaLaLime",
    description: "An e-commerce site for athletic apparel.",
    stack: "React, Redux, Sequelize, PostgreSQL, Heroku",
    github: "https://github.com/jthnyc/LaLaLime",
    link: "https://github.com/jthnyc/LaLaLime",
  },
];

export const Projects = () => {
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
  display: flex;
  min-height: 80vh;
  width: 100%;
  color: #edf5e1;
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 1000px;
  align-items: flex-start;
  & h2 {
    margin-bottom: 2rem;
  }
  @media ${device.sm} {
    padding: 0rem 6.5rem;
  }
`;

const ProjectsContainer = styled.ul`
  padding: 0;
  margin: 0;
`;
