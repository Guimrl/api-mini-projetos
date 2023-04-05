const fs = require("fs");

function getAllProjects() {
    return JSON.parse(fs.readFileSync("db/projects.json"));
}

function getProjectById(id) {
    const project = JSON.parse(fs.readFileSync("db/projects.json"));
    const projectFiltered = project.filter(project => project.id === id)[0];
    return projectFiltered;
}

module.exports = {
    getAllProjects,
    getProjectById
}