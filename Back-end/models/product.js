const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieTitle: { type: String, required: true },
    directorName: { type: String, required: true }
});

module.exports = mongoose.model('Movies', movieSchema);