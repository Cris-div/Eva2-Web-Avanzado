const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OrdenVenta = sequelize.define('OrdenVenta', {
    NroOrdenVta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaEmision: DataTypes.DATE,
    Motivo: DataTypes.STRING,
    Situacion: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER
}, {
    tableName: 'orden_venta',
    timestamps: false
});

module.exports = OrdenVenta;