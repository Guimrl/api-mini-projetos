const { Router } = require("express");
const { getProjetos } = require("../controllers/projetos");
const router = Router();

router.get('/', getProjetos());

router.post('/', (req, res) => {
    res.send("Você fez uma requisição do tipo POST")
});

router.patch('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH")
});

router.delete('/', (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE")
});

module.exports = router;
