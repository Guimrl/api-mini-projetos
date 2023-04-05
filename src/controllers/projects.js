const { getAllProjects, getProjectById, insertProject, editProject, deleteProjectById } = require("../services/projects");

function getAll(req, res) {
    try {
        const projects = getAllProjects();
        res.send(projects);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getProject(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const project = getProjectById(id);
            res.send(project);
        } else {
            res.status(422);
            res.send("Invalid Id");
        }
    } catch (error) {
        res.status(500);
        res.send(erro.message);
    }
}

function postProject(req, res) {
    try {
        const newProject = req.body;
        insertProject(newProject);
        res.status(201);
        res.send("success");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchProject(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const body = req.body;
            editProject(body, id);
            res.send("success");
        } else {
            res.status(422);
            res.send("Invalid Id");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteProject(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            deleteProjectById(id);
            res.send("success");
        } else {
            res.status(422);
            res.send("Invalid Id");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getAll,
    getProject,
    postProject,
    patchProject,
    deleteProject
};
