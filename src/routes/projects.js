const { Router } = require("express");
const { getAll } = require("../controllers/projects");
const router = Router();

router.get('/', getAll);

router.post('/', (req, res) => {
    res.send("Você fez uma requisição do tipo POST");
});

router.patch('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH");
});

router.delete('/', (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE");
});

module.exports = router;
