const express = require("express");
const projetos = require("./routes/projetos");

const app = express();
const port = 8000;

app.use('/projetos', projetos);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});