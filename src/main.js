import express from "express";
import db from "./config/dbConnect.js";
import projects from "./models/Project.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Connection error'));
db.once("open", () => {
    console.log('Database connection was successful');
});

const app = express();
app.use(express.json());

routes(app);

app.get('/projects/:id', (req, res) => {
    let index = getProject(req.params.id);
    res.json(projects[index]);
});

app.post('/projects', (req, res) => {
    projects.push(req.body);
    res.status(201).send('project insert with success');
});

app.put('/projects/:id', (req, res) => {
    let index = getProject(req.params.id);
    projects[index].title = req.body.title;
    res.json(projects);
});

app.delete('/projects/:id', (req, res) => {
    let {id} = req.params;
    let index = getProject(id);
    projects.splice(index, 1);
    res.send(`project ${id} deleted with sucess`);
});

function getProject(id) {
    return projects.findIndex(project => project.id == id);
}

export default app;
