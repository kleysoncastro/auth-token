const mongoose = require('mongoose');


// url de conexao 
mongoose.connect('mongo/localhost://nodeapi', {useMongoClient: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;