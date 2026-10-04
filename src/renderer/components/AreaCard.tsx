import type { Area } from "../types/area";
import type { Project } from "../types/project"

interface AreaCardProps {
    area: Area;
    projects: Project[];
}

export function AreaCard({
    area,
    projects
}: AreaCardProps) {
    const areaProjects = projects.filter(
        (project) => project.areaId === area.id
    );

    const activeProjects = areaProjects.filter(
        (project) => project.status !== "completed"
    ).length;

    return (
        <article className="area-card">
            <div className="area-card__heading">
                <div>
                    <h3>{area.name}</h3>

                    <span className="area-type">{area.type}</span>
                </div>
                <span className="area-card__arrow">
                    →
                </span>
            </div>

            <div className="area-card__details">
                <span>
                    {area.squareFeet ? `${area.squareFeet.toLocaleString()} sq ft` : "Size not entered"}
                </span>

                <span>
                    {activeProjects} active{" "}
                    {activeProjects === 1 ? "project" : "projects"}
                </span>
            </div>
        </article>
    );
}