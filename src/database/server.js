const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

const db = async = mongoose.connection;

    db.on('error', console.error.bind(console, 'Erro na conexao:'));
    db.once('open', function() {
        console.log("feito")
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
