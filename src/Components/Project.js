import React from 'react';
import './styles.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor libero eget velit tristique.',
      technologies: ['React.js'],
      link: 'https://aquamarine-meringue-c832ba.netlify.app/',
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor libero eget velit tristique.',
      technologies: ['React'],
      link: 'https://nimble-macaron-34d61c.netlify.app/',
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
