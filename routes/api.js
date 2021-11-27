const router = require('express').Router();

const middleware = require('./middlewares');
const apiPersonajesRouter = require('./api/characters');
const apiPeliculasRouter = require('./api/movies');
const apiUsersRouter = require('./api/users');

router.use('/characters', middleware.checkToken, apiPersonajesRouter);
router.use('/movies', middleware.checkToken, apiPeliculasRouter);
router.use('/users', apiUsersRouter);

module.exports = router;
