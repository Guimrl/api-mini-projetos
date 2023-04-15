import express from "express";
import ProjectController from "../controllers/ProjectController.js";

const router = express.Router();

router.get("/projects", ProjectController.getAllProjects)
    .get("/projects/:id", ProjectController.getProjectById)
    .post("/projects", ProjectController.postProject)
    .put("/projects/:id", ProjectController.updateProject);


export default router;