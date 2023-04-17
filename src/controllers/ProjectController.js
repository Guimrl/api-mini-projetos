import projects from "../models/Project.js";

class ProjectController {

    static getAllProjects = (req, res) => {
        projects.find((err, projects) => {
            res.status(200).json(projects);
        });
    }

    static getProjectById = (req, res) => {
        const id = req.params.id;

        projects.findById(id, (err, projects) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id not found.` });
            } else {
                res.status(200).send(projects);
            }
        });
    }

    static getProjectByName = (req, res) => {
        const title = req.query.title;

        projects.find({ 'title': title }, {}, (err, projects) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Name not found.` });
            } else {
                res.status(200).send(projects);
            }
        });
    }

    static postProject = (req, res) => {
        let project = new projects(req.body);

        project.save((err) => {
            if (err) {
                res.status(500).send({ message: `Error: ${err.message} - failed to register project` });
            } else {
                res.status(201).send(project.toJSON());
            }
        });
    }

    static updateProject = (req, res) => {
        const id = req.params.id;

        projects.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Project Update with success' });
            } else {
                res.status(500).send({ message: err.message });
            }
        });

    }

    static deleteProject = (req, res) => {
        const id = req.params.id;

        projects.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ messa: 'Project removed with success.' });
            } else {
                res.status(200).send({ message: err.message });
            }
        });
    }

}

export default ProjectController;
