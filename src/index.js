const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* app.use('/', (req, res) =>{

    res.send('OK');
}); */

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.listen(3001);