const fs = require('fs');

function getAllMusicals() {
    return JSON.parse(fs.readFileSync('musical-database.json'));  
}

function getMusicalById(id) {
    const musicals = getAllMusicals();
    return musicals.filter(musical => musical.id === id)[0];
}

function addMusical(musical) {
    const musicals = getAllMusicals();
    return fs.writeFileSync('musical-database.json', JSON.stringify([...musicals, musical]));
}

function patchMusicalField(modification, id) {
    let musicals = getAllMusicals();
    const index = musicals.findIndex(m => m.id === id);
    const updatedMusical = { ...musicals[index], ...modification };
    musicals[index] = updatedMusical;
    return fs.writeFileSync('musical-database.json', JSON.stringify(musicals));
}

function deleteMusicalById(id) {
    let musicals = getAllMusicals();
    musicals = musicals.filter(m => m.id !== id);
    return fs.writeFileSync('musical-database.json', JSON.stringify(musicals));
}

module.exports = {
    getAllMusicals,
    getMusicalById,
    addMusical,
    patchMusicalField,
    deleteMusicalById
};