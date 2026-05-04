const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DetalleCompra = sequelize.define('DetalleCompra', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NroOrdenC: DataTypes.INTEGER,
    CodMedicamento: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT
}, {
    tableName: 'detalle_orden_compra',
    timestamps: false
});

module.exports = DetalleCompra;