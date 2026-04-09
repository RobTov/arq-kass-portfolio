import { useState } from 'react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { ProjectDetail } from '../ProjectDetail/ProjectDetail';
import { Footer } from '../Footer/Footer';
import { architectureProjects } from '../../../infrastructure/data/projects';
import { Project } from '../../../domain/entities/Project';
import styles from './Architecture.module.css';

export function Architecture() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Arquitectura</h2>
          <p className={styles.subtitle}>Proyectos que definen espacios</p>
        </div>
        
        <div className={styles.grid}>
          {architectureProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      <Footer />
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Architecture;
