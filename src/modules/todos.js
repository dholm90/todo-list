import Project from "./projects.js";
// import Task from "./task.js";

export default class TodoList {
    constructor() {
        this.projects = []
        this.projects.push(new Project('Project 1'));
        this.projects.push(new Project('Project 2'));
        this.projects.push(new Project('Project 3'));
    }

    setProjects(projects) {
        this.projects = projects;

    }

    getProjects() {
        return this.projects;

    }

    getProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName);
    }

    contains(projectName) {
        return this.projects.some((project) => project.getName() === projectName);
    }

    addProject(newProject) {
        if (this.projects.find((project) => project.name === newProject.name))
            return
        this.projects.push(newProject);
    }

    deleteProject() {
        const projectToDelete = this.projects.find((project) => project.getName() === projectName);
        this.projects.splice(this.projects.indexOf(projectToDelete));
    }
}