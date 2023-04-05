const { Router } = require("express");
const { getAll, getProject, postProject } = require("../controllers/projects");
const router = Router();

router.get('/', getAll);
router.get('/:id', getProject);
router.post('/', postProject);

router.patch('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH");
});

router.delete('/', (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE");
});

module.exports = router;
