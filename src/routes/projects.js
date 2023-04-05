const { Router } = require("express");
const { getAll, getProject } = require("../controllers/projects");
const router = Router();

router.get('/', getAll);
router.get('/:id', getProject);

router.patch('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH");
});

router.delete('/', (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE");
});

module.exports = router;
