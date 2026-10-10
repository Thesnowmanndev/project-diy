import { useState } from "react";

import type { AppView } from "./types/view";

import { AreasView } from "./views/AreasView";
import { DashboardView } from "./views/DashboardView";
import { ProjectsView } from "./views/ProjectsView";
import { SettingsView } from "./views/SettingsView";
import { EditHomeView } from "./views/EditHomeView";

export function App() {
    const [currentView, setCurrentView] =
        useState<AppView>("dashboard");

    function renderView() {
        switch (currentView) {
            case "areas":
                return <AreasView />;

            case "projects":
                return <ProjectsView />;

            case "settings":
                return <SettingsView />;

            case "edit-home":
                return <EditHomeView />;

            case "dashboard":
            default:
                return (
                    <DashboardView
                        onEditHome={() =>
                            setCurrentView("edit-home")
                        }
                    />
                );
        }
    }

    return (
        <div className="app-shell">
            <aside className="sidebar">
                <div className="sidebar__brand">
                    Project DIY
                </div>

                <nav className="sidebar__nav">
                    <button
                        className={
                            currentView === "dashboard"
                                ? "nav-item nav-item--active"
                                : "nav-item"
                        }
                        type="button"
                        onClick={() =>
                            setCurrentView("dashboard")
                        }
                    >
                        Dashboard
                    </button>

                    <button
                        className={
                            currentView === "areas"
                                ? "nav-item nav-item--active"
                                : "nav-item"
                        }
                        type="button"
                        onClick={() =>
                            setCurrentView("areas")
                        }
                    >
                        Areas
                    </button>

                    <button
                        className={
                            currentView === "projects"
                                ? "nav-item nav-item--active"
                                : "nav-item"
                        }
                        type="button"
                        onClick={() =>
                            setCurrentView("projects")
                        }
                    >
                        Projects
                    </button>
                </nav>

                <button
                    className={
                        currentView === "settings"
                            ? "nav-item nav-item--active sidebar__settings"
                            : "nav-item sidebar__settings"
                    }
                    type="button"
                    onClick={() =>
                        setCurrentView("settings")
                    }
                >
                    Settings
                </button>
            </aside>

            <main className="main-content">
                {renderView()}
            </main>
        </div>
    );
}