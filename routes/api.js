const router = require('express').Router();

const middleware = require('./middlewares');
const apiPersonajesRouter = require('./api/characters');
const apiPeliculasRouter = require('./api/movies');
const apiUsersRouter = require('./api/auth');

router.use('/characters', middleware.checkToken, apiPersonajesRouter);
router.use('/movies', middleware.checkToken, apiPeliculasRouter);
router.use('/auth', apiUsersRouter);

module.exports = router;
