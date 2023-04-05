const fs = require("fs");
const path = "db/projects.json";

const parsed = JSON.parse(fs.readFileSync(path));

/**
 * Function responsible for reading
 * data from the api.
 *
 * @returns All projects
 */
function getAllProjects() {
    return parsed;
}

/**
 * This function returns a data
 * based on the id passed by parameter
 * 
 * @param { Number } id
 * @returns Project
 */
function getProjectById(id) {
    const project = parsed;
    const projectFiltered = project.filter(project => project.id === id)[0];
    return projectFiltered;
}

/**
 * Function that inserts a project in the api
 * through the PATCH method
 * 
 * @param { Project } newProject
 * @returns void
 */
function insertProject(newProject) {
    const projects = parsed;
    const newProjectsList = [...projects, newProject];

    fs.writeFileSync(path, JSON.stringify(newProjectsList));
}

/**
 * Function that performs the editing
 * method in the api
 * 
 * @param { Project } modify
 * @param { Number } id
 * @returns void
 */
function editProject(modify, id) {
    let projects = parsed;
    const modifyIndex = projects.findIndex(project => project.id === id);
    const changes = { ...projects[modifyIndex], ...modify };
    projects[modifyIndex] = changes;

    fs.writeFileSync(path, JSON.stringify(projects));
}

/**
 * Function that execute the deletion 
 * on the api data
 * 
 * @param { Number } id
 * @returns void
 */
function deleteProjectById(id) {
    const projects = parsed;
    const projectFiltered = projects.filter(project => project.id !== id);

    fs.writeFileSync(path, JSON.stringify(projectFiltered));
}

module.exports = {
    getAllProjects,
    getProjectById,
    insertProject,
    editProject,
    deleteProjectById
}