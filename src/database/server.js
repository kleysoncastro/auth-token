const mongoose = require('mongoose');


// url de conexao 
mongoose.connect('mongo/localhost://nodeapi');

mongoose.Promise = global.Promise;

module.exports = mongoose;