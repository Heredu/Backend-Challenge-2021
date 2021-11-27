const router = require('express').Router();

const { pelicula } = require('../../db');

const { check, validationResult } = require('express-validator');

router.get('/', async (req, res)=> {
    const movies = await pelicula.findAll({
        attributes: ['imagen', 'titulo', 'fechaCreacion']
      });
    res.json(movies)
});

router.post('/', [
    check('calificacion', 'Calificacion debe ser del 1 al 5').isIn(['1', '2', '3', '4', '5']),
], async (req, res) => {
    const errors = validationResult (req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errores: errors.array()})
    }

    const movies = await pelicula.create(req.body);
    res.json(movies);
});

router.put('/:peliculaId', async (req, res) => {
    await pelicula.update(req.body, {
        where: { id: req.params.peliculaId }
    });
    res.json ({success: 'modificado'})
})

router.delete('/:peliculaId', async (req, res) => {
    await pelicula.destroy({
        where: { id: req.params.peliculaId }
    });
    res.json ({success: 'borrado'})
})

module.exports = router;