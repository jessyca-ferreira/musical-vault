function getMusical(req, res) {
    try {
        res.send('Hello World!');
        console.log('Hello World!');
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

module.exports = {
    getMusical
}