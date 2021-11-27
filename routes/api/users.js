const router = require('express').Router();
const bcrypt = require('bcryptjs');

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

module.exports = router;
