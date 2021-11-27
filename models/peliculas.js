module.exports = (sequelize, type) => {
    return sequelize.define('pelicula', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagen: type.STRING, //link
        titulo: type.STRING,
        fechaCreacion: type.INTEGER,
        calificacion: type.INTEGER,
        personajes: type.STRING
    })
}