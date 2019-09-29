const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* app.use('/', (req, res) =>{

    res.send('OK');
}); */

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

// repasse do class controle para o metodo
require('../src/controller/authController')(app)

app.listen(3001);