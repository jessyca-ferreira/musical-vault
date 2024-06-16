const { Router } = require('express');
const { getMusicals, getMusical, postMusical, patchMusical, deleteMusical } = require('../controllers/musical');

const router = Router();

router.get('/', getMusicals);

router.get('/:id', getMusical);

router.post('/', postMusical);

router.patch('/:id', patchMusical);

router.delete('/:id', deleteMusical);

module.exports = router;