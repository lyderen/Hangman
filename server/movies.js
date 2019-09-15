const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movies = new Schema({
    title:{
        type: String
    },
    rank:{
        type: String
    },
    id: {
        type: String
    }
})

module.exports = Movies = mongoose.model('movie', Movies);