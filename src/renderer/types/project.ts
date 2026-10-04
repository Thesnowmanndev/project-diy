export type ProjectStatus =
    | "planned"
    | "active"
    | "completed";

export interface Project {
    id: number;
    areaId: number;
    name: string;
    description: string;
    status: ProjectStatus;
    budget: number;
    completedTasks: number;
    totalTasks: number;
}