const express =  require('express');

// importacao do Schema de usuarios
const User = require('../models/user');

// instacia uma rota
const router = express.Router();

//post na rota

router.post('/register', async (req, res)=>{
    try {
// correcao da linha 
        const user = await User.create(req.body)

        return res.send({user})
    } catch(error){
        return res.status(400).send({error: 'Erro no resgistro'})
    }
});

// repasse da rota, essa linha adcionara um prefixo /auth
module.exports = app => app.use('/auth', router)