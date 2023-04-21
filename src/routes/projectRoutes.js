import express from "express";
import ProjectController from "../controllers/projectController.js";

const router = express.Router();

router.get("/projects", ProjectController.getAllProjects)
    .get("/projects/busca", ProjectController.getProjectByName)
    .get("/projects/:id", ProjectController.getProjectById)
    .post("/projects", ProjectController.postProject)
    .put("/projects/:id", ProjectController.updateProject)
    .delete("/projects/:id", ProjectController.deleteProject);


export default router;
