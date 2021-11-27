module.exports = (sequelize, type) => {
    return sequelize.define('pelicula-serie', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagen: type.STRING, //link
        titulo: type.STRING,
        fecha_creacion: type.DATETIME,
        calificacion: type.INTEGER,
        personajes: type.STRING
    })
}