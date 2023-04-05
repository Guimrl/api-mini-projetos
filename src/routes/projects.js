const { Router } = require("express");
const { getAll, getProject, postProject, patchProject } = require("../controllers/projects");
const router = Router();

router.get('/', getAll);
router.get('/:id', getProject);
router.post('/', postProject);
router.patch('/:id', patchProject);

router.delete('/', (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE");
});

module.exports = router;
