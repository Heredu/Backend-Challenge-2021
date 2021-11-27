const router = require('express').Router();

const apiPersonajesRouter = require('./api/characters');

router.use('/characters', apiPersonajesRouter);

module.exports = router;
