import type { Project } from '../../../domain/entities/Project';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article className={styles.card} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <img 
          src={project.image} 
          alt={project.title}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay}>
          <span className={styles.viewMore}>Ver proyecto</span>
        </div>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
    </article>
  );
}

export default ProjectCard;
