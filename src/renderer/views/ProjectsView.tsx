import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/mockData";

export function ProjectsView() {
    return (
        <>
            <header className="page-header">
                <div>
                    <span className="eyebrow">
                        Home
                    </span>

                    <h1>Projects</h1>

                    <p>
                        Manage planned, active,
                        and completed work.
                    </p>
                </div>

                <button type="button">
                    + New Project
                </button>
            </header>

            <section className="project-list">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </section>
        </>
    );
}