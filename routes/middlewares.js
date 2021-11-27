const { check } = require('express-validator');
const jwt = require('jwt-simple');
const checkToken = (req, res, next) => {
    if(!req.headers['user-token']){
        return res.json({ error: 'Favor incluir user-token en la cabecera'});
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try{
        payload = jwt.decode(userToken, 'passsecreta');
    }
    catch (err){
        return res.json({error: 'Token incorrecto'});
    }
    req.usuarioId = payload.usuarioId;
    next();
}

module.exports = {
    checkToken: checkToken
}