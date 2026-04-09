import { useState } from 'react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { ProjectDetail } from '../ProjectDetail/ProjectDetail';
import { designProjects } from '../../../infrastructure/data/projects';
import { Project } from '../../../domain/entities/Project';
import styles from './Design.module.css';

export function Design() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Diseño</h2>
        <p className={styles.subtitle}>Espacios que inspiran</p>
      </div>
      
      <div className={styles.grid}>
        {designProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Design;
