const { Router } = require('express');
const { getMusical } = require('../controllers/musical');

const router = Router();

router.get('/', (req, res) => {
    getMusical(req, res);
});

router.post('/', (req, res) => {
    res.send('Got a POST request');
});

router.patch('/', (req, res) => {
    res.send('Got a PATCH request');
});

router.delete('/', (req, res) => {
    res.send('Got a DELETE request');
});

module.exports = router;