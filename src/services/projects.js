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

module.exports = {
    getAllProjects,
    getProjectById,
    insertProject
}