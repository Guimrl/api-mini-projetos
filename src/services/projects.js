const fs = require("fs");

function getAllProjects() {
    return JSON.parse(fs.readFileSync("db/projects.json"));
}

function getProjectById(id) {
    const project = JSON.parse(fs.readFileSync("db/projects.json"));
    const projectFiltered = project.filter(project => project.id === id)[0];
    return projectFiltered;
}

function insertProject(newProject) {
    const projects = JSON.parse(fs.readFileSync("db/projects.json"));
    const newProjectsList = [...projects, newProject];

    fs.writeFileSync("db/projects.json", JSON.stringify(newProjectsList));
}

function editProject(modify, id) {
    let projects = JSON.parse(fs.readFileSync("db/projects.json"));
    const modifyIndex = projects.findIndex(project => project.id === id);
    const changes = { ...projects[modifyIndex], ...modify };
    projects[modifyIndex] = changes;

    fs.writeFileSync("db/projects.json", JSON.stringify(projects));
}

function deleteProjectById(id) {
    const projects = JSON.parse(fs.readFileSync("db/projects.json"));
    const projectFiltered = projects.filter(project => project.id !== id);

    fs.writeFileSync("db/projects.json", JSON.stringify(projectFiltered));
}

module.exports = {
    getAllProjects,
    getProjectById,
    insertProject,
    editProject,
    deleteProjectById
}