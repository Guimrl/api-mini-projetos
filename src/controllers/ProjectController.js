import projects from "../models/Project.js";

class ProjectController {

    static getAllProjects = async (req, res) => {
        try {
            const result = await projects.find();
            res.status(200).json(result);
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Internal error server.` });
        }
        
    };

    static getProjectById = async (req, res) => {
        try {
            const id = req.params.id;
            const result = await projects.findById(id);
            res.status(200).send(result);
            
        } catch (error) {
            res.status(400).send({ message: `${error.message} - Id not found.` });
        }
    };

    static getProjectByName = async (req, res) => {
        try {
            const title = req.query.title;
            const result = await projects.find({ "title": title });
            res.status(200).send(result);

        } catch (error) {
            res.status(400).send({ message: `${error.message} - Name not found.` });
        }
    };

    static postProject = async (req, res) => {
        try {
            let project = new projects(req.body);
            const result = await project.save();
            res.status(201).send(result.toJSON());

        } catch (error) {
            res.status(500).send({ message: `Error: ${error.message} - failed to register project.` });
        }
    };

    static updateProject = async (req, res) => {
        try {
            const id = req.params.id;
            await projects.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({ message: "Project Updated with success." });

        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    };

    static deleteProject = async (req, res) => {
        try {
            const id = req.params.id;
            await projects.findByIdAndDelete(id);
            res.status(200).send({ message: "Project removed with success." });

        } catch (error) {
            res.status(200).send({ message: error.message });
        }
    };

}

export default ProjectController;
