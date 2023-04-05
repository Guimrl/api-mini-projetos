const fs = require("fs");

function getAllProjects() {
    return JSON.parse(fs.readFileSync("db/projects.json"));
}

module.exports = {
    getAllProjects
}