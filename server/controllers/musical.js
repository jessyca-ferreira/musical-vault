const { getAllMusicals, getMusicalById, addMusical, patchMusicalField, deleteMusicalById } = require('../services/musical');

function getMusicals(req, res) {
    try {
        const musicals = getAllMusicals();
        res.send(musicals);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

function getMusical(req, res) {
    try {
        const id = req.params.id;
        const musical = getMusicalById(id);
        res.send(musical);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postMusical(req, res) {
    try {
        const musical = req.body;
        addMusical(musical);
        res.status(201);
        res.send('Musical added');
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchMusical(req, res) {
    try {
        const musical = req.body;
        const id = req.params.id;
        patchMusicalField(musical, id);
        res.status(200);
        res.send('Musical updated');
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteMusical(req, res) {
    try {
        const id = req.params.id;
        deleteMusicalById(id);
        res.status(200);
        res.send('Musical deleted');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getMusicals,
    getMusical,
    postMusical,
    patchMusical,
    deleteMusical
}