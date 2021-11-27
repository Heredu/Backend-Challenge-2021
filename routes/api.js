const router = require('express').Router();

const middleware = require('./middlewares');
const apiPersonajesRouter = require('./api/characters');
const apiUsersRouter = require('./api/users');

router.use('/characters', middleware.checkToken, apiPersonajesRouter);
router.use('/users', apiUsersRouter);

module.exports = router;
