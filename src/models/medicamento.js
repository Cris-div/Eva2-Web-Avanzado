const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Medicamento = sequelize.define('Medicamento', {
    CodMedicamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcionMed: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precioVentaUni: DataTypes.FLOAT,
    Marca: DataTypes.STRING
}, {
    tableName: 'medicamento',
    timestamps: false
});

module.exports = Medicamento;