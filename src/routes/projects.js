const { Router } = require("express");
const { getAll, getProject, postProject, patchProject, deleteProject } = require("../controllers/projects");
const router = Router();

router.get('/', getAll);
router.get('/:id', getProject);
router.post('/', postProject);
router.patch('/:id', patchProject);

router.delete('/:id', deleteProject);

module.exports = router;
