import { AreaCard } from "../components/AreaCard";
import {
    areas,
    projects
} from "../data/mockData";

export function AreasView() {
    return (
        <>
            <header className="page-header">
                <div>
                    <span className="eyebrow">
                        Home
                    </span>

                    <h1>Areas</h1>

                    <p>
                        Manage rooms, garages,
                        yards, and other spaces.
                    </p>
                </div>

                <button type="button">
                    + Add Area
                </button>
            </header>

            <div className="area-grid">
                {areas.map((area) => (
                    <AreaCard
                        key={area.id}
                        area={area}
                        projects={projects}
                    />
                ))}
            </div>
        </>
    );
}