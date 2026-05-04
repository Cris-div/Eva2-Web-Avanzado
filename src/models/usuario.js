const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING,
    rol: DataTypes.ENUM('ADMIN', 'VENDEDOR', 'ALMACEN')
});

module.exports = Usuario;