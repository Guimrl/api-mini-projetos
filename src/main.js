const express = require("express");
const app = express();
app.use(express.json());
const port = 8000;

const projects = require("./routes/projects");

app.use("/projects", projects);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
