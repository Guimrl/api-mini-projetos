import express from "express";
import router from "./projectRoutes.js";
import projects from "./projectRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ title: "Hello, world!" });
    });

    app.use(
        express.json(),
        projects
    )
}

export default routes;
