import nProjects from "../models/NProjects.js";

class NProjectController {

    static getAllProjects = async (req, res) => {
        try {
            const result = await nProjects.find();
            res.status(200).json(result);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Internal error server.` });
        }
    };

    static getProjectById = async (req, res) => {
        try {
            const id = req.params.id;
            const result = await nProjects.findById(id);
            res.status(200).send(result);

        } catch (error) {
            res.status(400).send({ message: `${error.message} - Id not found.` });
        }
    };

    static postProject = async (req, res) => {
        try {
            let project = new nProjects(req.body);
            const result = await project.save();
            res.status(201).send(result.toJSON());

        } catch (error) {
            res.status(500).send({ message: `Error: ${error.message} - failed to register project.` });
        }
    };

    static updateProject = async (req, res) => {
        try {
            const id = req.params.id;
            await nProjects.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({ message: "Project Updated with success." });
            
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    };

    static deleteProject = async (req, res) => {
        try {
            const id = req.params.id;
            await nProjects.findByIdAndDelete(id); 
            res.status(200).send({ message: "Project removed with success." });

        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    };

}

export default NProjectController;
