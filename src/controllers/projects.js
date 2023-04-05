const { getAllProjects, getProjectById, insertProject, editProject, deleteProjectById } = require("../services/projects");

/**
 * This function brings all the data from the api
 * @param { Request } req
 * @param { Response } res 
 * @returns void
 */
function getAll(req, res) {
    try {
        const projects = getAllProjects();
        res.send(projects);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

/**
 * Function responsible for returning api data by id
 * @param { Request } req
 * @param { Response } res 
 * @returns void
 */
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
        res.send(error.message);
    }
}

/**
 * This function inserts data into the api
 * through a POST call
 * @param { Request } req
 * @param { Response } res 
 * @returns void
 */
function postProject(req, res) {
    try {
        const newProject = req.body;
        if (req.body.title && req.body.url) {
            insertProject(newProject);
            res.status(201);
            res.send("success");
        } else {
            res.status(422);
            res.send("The title and url fields is required");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

/**
 * This function performs the action of
 * updating the api data
 * @param { Request } req
 * @param { Response } res 
 * @returns void
 */
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

/**
 * Function that performs the deletion process
 * in the api data
 * @param { Request } req
 * @param { Response } res 
 * @returns void
 */
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
