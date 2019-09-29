const mongoose = require('../database/server');

const userSchema = new mongoose.Schema({

    nome: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select:  false,
    },
    createAt: {
        type: Date,
        default: Date.now
    }

});
// user sera o nome da colection/dabela
const User = mongoose.model('user', userSchema);

module.exports = User;