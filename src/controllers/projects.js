const { getAllProjects, getProjectById, insertProject } = require("../services/projects");

function getAll(req, res) {
    try {
        const projects = getAllProjects();
        res.send(projects);
    } catch (error) {
        //res.status(500);
        //res.send(error.message);
    }
}

function getProject(req, res) {
    try {
        const id = req.params.id;
        const project = getProjectById(id);
        res.send(project);
    } catch (error) {

    }
}

function postProject(req, res) {
    try {
        const newProject = req.body;
        insertProject(newProject);
        res.status(201);
        res.send("success");
    } catch (error) {

    }
}

module.exports = {
	getAll,
    getProject,
    postProject
};
