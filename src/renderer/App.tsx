import { ProjectCard } from "./components/ProjectCard";

import type { Area } from "./types/area";
import type { Home } from "./types/home";
import type { Project } from "./types/project";

const home: Home = {
    id: 1,
    name: "My Home"
};

const areas: Area[] = [
    {
        id: 1,
        name: "Kitchen",
        type: "room"
    },
    {
        id: 2,
        name: "Guest Bathroom",
        type: "room"
    },
    {
        id: 3,
        name: "Garage",
        type: "garage"
    },
    {
        id: 4,
        name: "Front Yard",
        type: "yard"
    },
    {
        id: 5,
        name: "Back Yard",
        type: "yard"
    }
];

const projects: Project[] = [
    {
        id: 1,
        areaId: 2,
        name: "Replace Bathroom Floor",
        description:
            "Remove the existing flooring and install new tile.",
        status: "planned",
        budget: 1500,
        completedTasks: 0,
        totalTasks: 6
    },
    {
        id: 2,
        areaId: 3,
        name: "Garage Shelving",
        description:
            "Build wall-mounted storage for tools and supplies.",
        status: "active",
        budget: 450,
        completedTasks: 2,
        totalTasks: 5
    }
];

export function App() {
    return (
        <div className="app">
            <header className="app-header">
                <strong className="app-title">
                    Project DIY
                </strong>

                <button type="button">
                    + New Project
                </button>
            </header>

            <main className="content">
                <div className="page-heading">
                    <div>
                        <h1>Projects</h1>

                        <p>
                            {home.name} · {areas.length} areas
                        </p>
                    </div>
                </div>

                <section className="project-list">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}