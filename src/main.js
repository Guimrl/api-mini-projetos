import express from "express";

const app = express();
app.use(express.json());
const projects = [
    {
        id: 1,
        "title": "calculadora"
    },
    {
        id: 2,
        "title": "cronometro"
    }
];

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
});

app.get('/projects', (req, res) => {
    res.status(200).send(projects);
});

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
