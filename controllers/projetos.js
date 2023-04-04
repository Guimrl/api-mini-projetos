function getProjetos(req, res) {
    try {
        res.send("Hello, world!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getProjetos
}
