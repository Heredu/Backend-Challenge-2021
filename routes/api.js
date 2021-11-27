const router = require('express').Router();

const apiPersonajesRouter = require('./api/characters');
const apiUsersRouter = require('./api/users');

router.use('/characters', apiPersonajesRouter);
router.use('/users', apiUsersRouter);

module.exports = router;
