import { AreaCard } from "../components/AreaCard"
import { StatCard } from "../components/StatCard"

import {
    areas,
    home,
    projects
} from "../data/mockData"

export function DashboardView() {
    const activeProjects = projects.filter(
        (project) => project.status === "active"
    ).length;

    const completedProjects = projects.filter(
        (project) => project.status === "completed"
    ).length;

    return (
        <>
            <header className="page-header">
                <div>
                    <span className="eyebrow">
                        Home Dashboard
                    </span>

                    <h1>{home.name}</h1>

                    <p>
                        Keep track of your home,
                        projects, and spaces.
                    </p>
                </div>

                <button type="button">
                    Edit Home
                </button>
            </header>

            <section className="stats-grid">
                <StatCard
                    label="Home Size"
                    value={
                        home.squareFeet
                            ? `${home.squareFeet.toLocaleString()} sq ft`
                            : "Not entered"
                    }
                />

                <StatCard
                    label="Year Built"
                    value={home.yearBuilt ?? "Not entered"}
                />

                <StatCard
                    label="Areas"
                    value={areas.length}
                />

                <StatCard
                    label="Active Projects"
                    value={activeProjects}
                />

                <StatCard
                    label="Completed Projects"
                    value={completedProjects}
                />
            </section>

            <section className="dashboard-section">
                <div className="section-heading">
                    <div>
                        <h2>Areas</h2>

                        <p>
                            Rooms and outdoor spaces
                            around your home.
                        </p>
                    </div>

                    <button type="button">
                        + Add Area
                    </button>
                </div>

                <div className="area-grid">
                    {areas.map((area) => (
                        <AreaCard
                            key={area.id}
                            area={area}
                            projects={projects}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}