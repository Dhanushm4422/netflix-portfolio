import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAngular, FaJava, FaPython, FaPhp, FaHtml5, FaCss3, FaBootstrap, FaJs, FaAws, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiDjango, SiExpress, SiThingiverse } from 'react-icons/si';
import { FaServer } from 'react-icons/fa';

import { Project } from '../types';
import { getProjects } from '../queries/getProjects';

const techIcons: { [key: string]: JSX.Element } = {
  "React": <FaReact />,
  "Node.js": <FaNodeJs />,
  "MongoDB": <SiMongodb />,
  "Express.js": <SiExpress />,
  "MySQL": <SiMysql />,
  "PHP": <FaPhp />,
  "Bootstrap": <FaBootstrap />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3 />,
  "JavaScript": <FaJs />,
  "Machine Learning": <FaPython />,
  "Kafka": <FaServer />,
  "ZooKeeper": <FaServer />,
  "Django": <SiDjango />,
  "Java": <FaJava />,
  "Angular": <FaAngular />,
  "AWS": <FaAws />,
  "ThingBoard": <SiThingiverse />,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => { 
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub className="github-icon" />
                  <span className="link-text">Link</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;