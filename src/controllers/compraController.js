const OrdenCompra = require('../models/ordenCompra');
const DetalleCompra = require('../models/detalleCompra');

exports.crearCompra = async (req, res) => {
    try {
        const { fechaEmision, CodLab, detalles } = req.body;

        // 1. crear orden
        const compra = await OrdenCompra.create({
            fechaEmision,
            CodLab,
            Situacion: 'ACTIVO',
            Total: 0
        });

        let total = 0;

        // 2. crear detalles
        for (let item of detalles) {
            await DetalleCompra.create({
                NroOrdenC: compra.NroOrdenC,
                CodMedicamento: item.CodMedicamento,
                cantidad: item.cantidad,
                precio: item.precio
            });

            total += item.cantidad * item.precio;
        }

        // 3. actualizar total
        compra.Total = total;
        await compra.save();

        res.json({ msg: 'Compra registrada', compra });

    } catch (error) {
        res.status(500).json(error);
    }
};