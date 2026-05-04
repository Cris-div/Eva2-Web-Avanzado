const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DetalleVenta = sequelize.define('DetalleVenta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NroOrdenVta: DataTypes.INTEGER,
    CodMedicamento: DataTypes.INTEGER,
    cantidadRequerida: DataTypes.INTEGER
}, {
    tableName: 'detalle_orden_venta',
    timestamps: false
});

module.exports = DetalleVenta;