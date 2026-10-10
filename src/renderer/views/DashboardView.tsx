import { PropertyDetail } from "../components/PropertyDetail";
import { StatCard } from "../components/StatCard";

import {
    home,
    projects
} from "../data/mockData";

import {
    formatCoolingType,
    formatGarage,
    formatHeatingType,
    formatHomeType,
    formatRoofMaterial,
    getBathroomCount
} from "../utils/home";

interface DashboardViewProps {
    onEditHome: () => void;
}

export function DashboardView({
    onEditHome
}: DashboardViewProps) {
    const activeProjects = projects.filter(
        (project) => project.status === "active"
    ).length;

    const plannedProjects = projects.filter(
        (project) => project.status === "planned"
    ).length;

    const completedProjects = projects.filter(
        (project) => project.status === "completed"
    ).length;

    const projectedCost = projects.reduce(
        (total, project) => total + project.budget,
        0
    );

    return (
        <>
            <header className="page-header">
                <div>
                    <span className="eyebrow">
                        Home Dashboard
                    </span>

                    <h1>{home.name}</h1>

                    <p>
                        {formatHomeType(home.homeType)}
                        {" · "}
                        {home.yearBuilt
                            ? `Built ${home.yearBuilt}`
                            : "Year not entered"}
                        {" · "}
                        {home.livableSquareFeet
                            ? `${home.livableSquareFeet.toLocaleString()} sq ft`
                            : "Size not entered"}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onEditHome}
                >
                    Edit Home
                </button>
            </header>

            <section className="dashboard-section">
                <div className="section-heading">
                    <div>
                        <h2>Property</h2>

                        <p>
                            Key information about your home.
                        </p>
                    </div>
                </div>

                <div className="property-grid">
                    <PropertyDetail
                        label="Home Type"
                        value={formatHomeType(home.homeType)}
                    />

                    <PropertyDetail
                        label="Lot Size"
                        value={
                            home.lotSquareFeet
                                ? `${home.lotSquareFeet.toLocaleString()} sq ft`
                                : "Not entered"
                        }
                    />

                    <PropertyDetail
                        label="Livable Area"
                        value={
                            home.livableSquareFeet
                                ? `${home.livableSquareFeet.toLocaleString()} sq ft`
                                : "Not entered"
                        }
                    />

                    <PropertyDetail
                        label="Bedrooms"
                        value={home.bedrooms ?? "Not entered"}
                    />

                    <PropertyDetail
                        label="Bathrooms"
                        value={getBathroomCount(home)}
                    />

                    <PropertyDetail
                        label="Heating"
                        value={formatHeatingType(home.heatingType)}
                    />

                    <PropertyDetail
                        label="Cooling"
                        value={formatCoolingType(home.coolingType)}
                    />

                    <PropertyDetail
                        label="Garage"
                        value={formatGarage(home)}
                    />

                    <PropertyDetail
                        label="Roof"
                        value={formatRoofMaterial(home.roofMaterial)}
                    />

                    <PropertyDetail
                        label="Parcel Number"
                        value={home.parcelNumber ?? "Not entered"}
                    />
                </div>
            </section>

            <section className="dashboard-section">
                <div className="section-heading">
                    <div>
                        <h2>Projects</h2>

                        <p>
                            Current project activity
                            across your home.
                        </p>
                    </div>
                </div>

                <div className="stats-grid">
                    <StatCard
                        label="Active Projects"
                        value={activeProjects}
                    />

                    <StatCard
                        label="Planned Projects"
                        value={plannedProjects}
                    />

                    <StatCard
                        label="Completed Projects"
                        value={completedProjects}
                    />

                    <StatCard
                        label="Projected Cost"
                        value={`$${projectedCost.toLocaleString()}`}
                    />
                </div>
            </section>
        </>
    );
}