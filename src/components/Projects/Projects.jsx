import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Projects.module.css';

const Projects = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Récupération des données traduites du fichier JSON
  const projectsContent = t('projects', { returnObjects: true });
  const projects = projectsContent.projects;
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.content}>
        <h2>{projectsContent.title}</h2>
        <div className={styles.grid}>
          {visibleProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button onClick={() => setSelectedProject(project)} className={styles.moreButton}>
                {project.moreButtonText}
              </button>
            </div>
          ))}
        </div>
        {projects.length > 3 && (
          <button onClick={() => setShowAll(!showAll)} className={styles.showMoreButton}>
            {showAll ? projectsContent.showLessButtonText : projectsContent.showMoreButtonText}
          </button>
        )}
        {selectedProject && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.details}</p>
              <div className={styles.technologies}>
                <strong>{projectsContent.technologiesLabel}</strong>
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={styles.button}>
                {selectedProject.githubButtonText}
              </a>
              <button onClick={() => setSelectedProject(null)} className={styles.closeButton}>
                {selectedProject.closeButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
