import type { Area } from "../types/area";
import type { Home } from "../types/home";
import type { Project } from "../types/project";

export const home: Home = {
    id: 1,
    name: "My Home",
    yearBuilt: 2005,
    squareFeet: 2100
};

export const areas: Area[] = [
    {
        id: 1,
        name: "Kitchen",
        type: "room",
        squareFeet: 180
    },
    {
        id: 2,
        name: "Guest Bathroom",
        type: "room",
        squareFeet: 55
    },
    {
        id: 3,
        name: "Garage",
        type: "garage",
        squareFeet: 480
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

export const projects: Project[] = [
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