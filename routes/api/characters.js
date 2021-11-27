const router = require('express').Router();

const { personaje } = require('../../db');

router.get('/', async (req, res)=> {
    const characters = await personaje.findAll();
    res.json(characters)
});

router.post('/', async (req, res) => {
    const characters = await personaje.create(req.body);
    res.json(characters);
});

router.put('/:personajeId', async (req, res) => {
    await personaje.update(req.body, {
        where: { id: req.params.personajeId }
    });
    res.json ({success: 'modificado'})
})

router.delete('/:personajeId', async (req, res) => {
    await personaje.destroy({
        where: { id: req.params.personajeId }
    });
    res.json ({success: 'borrado'})
})

module.exports = router;
