import styled from "styled-components";
import Project from "./Project";
import { scenesync, khvs, pollyglot, theshoppies } from "../images";
import { device } from "../device";
import { useTranslation } from "react-i18next";
import { track } from '@vercel/analytics';
import { useEffect, useRef } from 'react';

export const Projects = () => {
  const { t, ready } = useTranslation("projects");
  const sectionRef = useRef(null);

  // Track when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track('section_view', { 
            section: 'projects'
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  if (!ready) return <p>Loading translations...</p>;
  
  const projects = [
    {
      id: 1,
      img: scenesync,
      title: t("p1"),
      description: t("p1-descriptor"),
      stack: t("p1-stack"),
      status: "In Progress",
      github: "https://github.com/jthnyc/SceneSync",
      link: "https://scene-sync-sepia.vercel.app/",
    },
    {
      id: 2,
      img: khvs,
      title: t("p2"),
      description: t("p2-descriptor"),
      stack: t("p2-stack"),
      status: "Shipped",
      link: "https://www.khvs.tc.edu.tw/",
    },
    {
      id: 3,
      img: pollyglot,
      title: t("p3"),
      description: t("p3-descriptor"),
      stack: t("p3-stack"),
      status: "Shipped",
      github: "https://github.com/jthnyc/pollyglot",
      link: "https://pollyglot-6clm.onrender.com/",
    },
    {
      id: 4,
      img: theshoppies,
      title: t("p4"),
      description: t("p4-descriptor"),
      stack: t("p4-stack"),
      status: "Shipped",
      github: "https://github.com/jthnyc/movie-nom-app",
      link: "https://movie-nom-app.vercel.app/",
    },
  ];

  // Pass tracking functions to each project
  const projectsWithTracking = projects.map(project => ({
    ...project,
    onProjectClick: () => {
      track('project_click', { 
        project: project.title,
        status: project.status,
        id: project.id,
        type: 'card'
      });
    },
    onGithubClick: () => {
      track('project_link_click', { 
        project: project.title,
        link_type: 'github',
        location: 'card'
      });
    },
    onLiveLinkClick: () => {
      track('project_link_click', { 
        project: project.title,
        link_type: 'live',
        location: 'card'
      });
    }
  }));
  
  return (
    <ProjectSection id="projects" ref={sectionRef}>
      <h2>{t("title")}</h2>
      <ProjectsContainer>
        {projectsWithTracking.map((project) => (
          <Project {...project} key={project.id} id={`project-${project.id}`} />
        ))}
      </ProjectsContainer>
    </ProjectSection>
  );
};

export default Projects;

const ProjectSection = styled.section`
  max-width: 75rem;
  align-items: flex-start;
  display: flex;
  color: #edf5e1;
  padding: 0;
  
  & h2 {
    margin-top: 10rem;
    margin-bottom: 3rem;
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
  width: 100%;
`;