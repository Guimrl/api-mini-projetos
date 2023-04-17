import nProjects from "../models/NProjects.js";

class NProjectController {

    static getAllProjects = (req, res) => {
        nProjects.find((err, projects) => {
            res.status(200).json(projects);
        });
    };

    static getProjectById = (req, res) => {
        const id = req.params.id;

        nProjects.findById(id, (err, projects) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id not found.` });
            } else {
                res.status(200).send(projects);
            }
        });
    };

    static postProject = (req, res) => {
        let project = new nProjects(req.body);

        project.save((err) => {
            if (err) {
                res.status(500).send({ message: `Error: ${err.message} - failed to register project` });
            } else {
                res.status(201).send(project.toJSON());
            }
        });
    };

    static updateProject = (req, res) => {
        const id = req.params.id;

        nProjects.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Project Update with success" });
            } else {
                res.status(500).send({ message: err.message });
            }
        });

    };

    static deleteProject = (req, res) => {
        const id = req.params.id;

        nProjects.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ messa: "Project removed with success." });
            } else {
                res.status(200).send({ message: err.message });
            }
        });
    };

}

export default NProjectController;
