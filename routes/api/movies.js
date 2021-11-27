const router = require('express').Router();

const { pelicula } = require('../../db');

router.get('/', async (req, res)=> {
    const movies = await pelicula.findAll({
        attributes: ['imagen', 'titulo', 'fechaCreacion']
      });
    res.json(movies)
});

router.post('/', async (req, res) => {
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