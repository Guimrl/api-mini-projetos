import express from "express";
import NProjectController from "../controllers/nProjectsController.js";

const router = express.Router();

router.get("/nprojects", NProjectController.getAllProjects)
    .get("/nprojects/:id", NProjectController.getProjectById)
    .post("/nprojects", NProjectController.postProject)
    .put("/nprojects/:id", NProjectController.updateProject)
    .delete("/nprojects/:id", NProjectController.deleteProject);

export default router;
