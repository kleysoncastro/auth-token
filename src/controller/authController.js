const express =  require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// importacao do Schema de usuarios
const User = require('../models/user');

const authConfg = require('../config/auth')

// instacia uma rota
const router = express.Router();

//post, rota de registro

router.post('/register', async (req, res)=>{

    // recupera instancia do email 
    const {email} = req.body;

    try {

        if(await User.findOne({email})) {

            return res.status(400).send({erro: "Erro, email já cadastrado"})
        }
        

        const user = await User.create(req.body)

        // essa linha empeque que a hash de senha retorne no post
        user.password = undefined;

        return res.send({user})
    } catch(error){
        return res.status(400).send({error: 'Erro no resgistro'})
    }
});

    // rota pra token
    router.post('/authenticate', async (req, res)=>{

        const {email, password} = req.body;
       
        // select('+password') tras senha para ser comparada
        const user = await User.findOne({email}).select('+password')

        // condicao se nao for encontrado o user"email", rertona erro 400
        if(!user) {
            res.status(400).send({erro: "Usuario nao encontrado"})
        }
        
        // condicao para comparacao de hash,1 parametro e password parado para ser comparado com o mongodb
        if(!await bcrypt.compare(password, user.password)) {

            return res.status(400).send({erro: "Senha invalida"})
        }

        user.password = undefined;


        // add and config token


         /* authConfig contem o md5, expiresIn tempo de validade em segundos 
         * pega o ID e usado e junta com o md5 cria o token
         */

        const token = jwt.sign({id: user.id}, authConfg.secret, {
            expiresIn: 86400,
        })
       
        // se true 
        res.send({user, token})

    })





// repasse da rota, essa linha adcionara um prefixo /auth
module.exports = app => app.use('/auth', router)