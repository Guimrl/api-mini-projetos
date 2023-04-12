import projects from "../models/Project.js";

class ProjectController {

    static getAllProjects = (req, res) => {
        projects.find((err, projects) => {
            res.status(200).json(projects);    
        });

    }
}

export default ProjectController;