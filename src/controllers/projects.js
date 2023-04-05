const { getAllProjects, getProjectById } = require("../services/projects");

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

module.exports = {
	getAll,
    getProject
};
