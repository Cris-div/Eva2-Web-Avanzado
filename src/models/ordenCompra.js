const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OrdenCompra = sequelize.define('OrdenCompra', {
    NroOrdenC: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaEmision: DataTypes.DATE,
    Situacion: DataTypes.STRING,
    Total: DataTypes.FLOAT,
    CodLab: DataTypes.INTEGER
}, {
    tableName: 'orden_compra',
    timestamps: false
});

module.exports = OrdenCompra;