import React from 'react';
import data from './data';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {data.projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
