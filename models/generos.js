module.exports = (sequelize, type) => {
    return sequelize.define('pelicula-serie', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        imagen: type.STRING, //link
        peliculas: type.STRING
    })
}