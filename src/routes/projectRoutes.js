import express from "express";
import ProjectController from "../controllers/ProjectController.js";

const router = express.Router();

router.get("/projects", ProjectController.getAllProjects)
    .post("/projects", ProjectController.postProject)
    .put("/projects/:id", ProjectController.updateProject);


export default router;
