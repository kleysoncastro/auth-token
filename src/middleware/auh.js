const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


module.exports = (req, res, next) => {

    const authHeader =  req.headers.authorization;
    
    // os if sao para validacao simples na esturura do token
    if(!authHeader) {
        return  res.status(401).send({error: 'token não aprovado'})
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2) {
        return res.status(401).send({error: 'token erro'})
    }

    const [schema, token ] = parts;
// expressao regular 
    if(!/Bearer$/i.test(schema)) {

        return res.status(401).send({error: 'token mal formado'});
    }
    /* 
    * token recebido 
    * authconfig mdd5 
    * dois parametros de retorno
    * err, quanod a erro
    * decoded retorna ide decodificado
    */
    jwt.verify(token, authConfig.secret, (err, decoded)=>{

        if(err) return res.status(401).send({error: 'token invalido'}) 

        // sera usado na class para fins de CRUD
        req.userId = decoded.id;
        
        return next();
    });
};