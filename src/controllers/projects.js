const { getAllProjects } = require("../services/projects");

function getAll(req, res) {
    try {
        const projects = getAllProjects();
        res.send(projects);
    } catch (error) {
        //res.status(500);
        //res.send(error.message);
    }
}

module.exports = {
	getAll,
};
