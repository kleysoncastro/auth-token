const fs = require('fs');
const path = require('path');

module.exports = app => {


    /* 
    * idexof -> ignora arquivos que começam com '.' e includes.js
    
    
    */
    
    fs
    .readdirSync(__dirname)
    .filter(file =>((file.indexOf('.')) !== 0 && (file !== "includes.js")))
    .forEach(file => require(path.resolve(__dirname, file))(app));
}