const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');

const { User } = require('../../db');

const { check, validationResult } = require('express-validator');

router.post('/register', [
    check('username', 'Falta el nombre de usuario').not().isEmpty(),
    check('password', 'Falta el password').not().isEmpty(),
    check('password', 'Mail incorrecto').not().isEmail()
], async (req, res) => {

    const errors = validationResult (req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errores: errors.array()})
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
});

router.post('/login', async (req, res) =>{
    const user = await User.findOne({where: {email: req.body.email}});
    if(user){
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales){
            res.json({success: createToken(user)});
        }
        else {
            res.json({error: 'Error en usuario y/o contraseña'});
        }
    }
    else {
        res.json({error: 'Error en usuario y/o contraseña'});
    }
})

const createToken = (user) => {
    const playload = {
        usuarioID: user.id
    }
    return jwt.encode(playload, 'passsecreta');
}

module.exports = router;
