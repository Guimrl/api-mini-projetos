import express from "express";
import projects from "./projectRoutes.js";
import nProjects from "./nProjectRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ title: "Hello, world!" });
    });

    app.use(
        express.json(),
        projects,
        nProjects
    );
};

export default routes;
