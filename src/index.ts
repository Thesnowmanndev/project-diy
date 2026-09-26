interface Project {
    id: number;
    name: string;
    status: "planned" | "active" | "completed";
}

const project: Project = {
    id: 1,
    name: "Replace bathroom floor",
    status: "planned"
};

console.log(project);