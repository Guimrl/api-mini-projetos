import projects from "../models/Project.js";

class ProjectController {

    static getAllProjects = (req, res) => {
        projects.find((err, projects) => {
            res.status(200).json(projects);
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
}

export default ProjectController;