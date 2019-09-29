const mongoose = require('../database/server');
const bcryptjs = require('bcryptjs');

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

// anstes de salvar encripra usando a lib bcrypt

userSchema.pre('save', async function(next) {
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;
    next();
})


// user sera o nome da colection/dabela
const User = mongoose.model('user', userSchema);

module.exports = User;