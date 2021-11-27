const Sequelize = require ('sequelize');

const PersonajeModelo = require('./models/personajes');

const sequelize = new Sequelize ('bhekfp2adliaxycgkxgz',  'uiruianxd7algkb6', 'IcStdDY4LsVAA1lQex1h', {
    host: 'bhekfp2adliaxycgkxgz-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});

const personaje = PersonajeModelo(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() => {
        console.log('Tablas ok')
    })

module.exports = {
    personaje
}