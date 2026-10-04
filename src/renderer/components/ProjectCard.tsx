import type { Project } from "../types/project";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({
    project
}: ProjectCardProps) {
    return (
        <article className="project-card">
            <div className="project-card_header">
                <div>
                    <h2>{project.name}</h2>

                    <span className="project-status">
                        {project.status}
                    </span>
                </div>
            </div>

            <p className="project-description">
                {project.description}
            </p>

            <div className="project-card__details">
                <span>
                    Budget: ${project.budget.toLocaleString()}
                </span>

                <span>
                    {project.completedTasks} of {project.totalTasks} tasks done
                </span>
            </div>
        </article>
    );
}