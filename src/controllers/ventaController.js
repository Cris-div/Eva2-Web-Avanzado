const OrdenVenta = require('../models/ordenVenta');
const DetalleVenta = require('../models/detalleVenta');
const Medicamento = require('../models/medicamento');

exports.crearVenta = async (req, res) => {
    try {
        const { fechaEmision, Motivo, detalles } = req.body;

        // 🔥 validar stock antes
        for (let item of detalles) {
            const med = await Medicamento.findByPk(item.CodMedicamento);

            if (!med) {
                return res.status(404).json({ msg: 'Medicamento no existe' });
            }

            if (med.stock < item.cantidadRequerida) {
                return res.status(400).json({
                    msg: `Stock insuficiente para ${med.descripcionMed}`
                });
            }
        }

        // crear venta
        const venta = await OrdenVenta.create({
            fechaEmision,
            Motivo,
            Situacion: 'ACTIVO',
            usuario_id: req.user.id
        });

        // crear detalles
        for (let item of detalles) {
            await DetalleVenta.create({
                NroOrdenVta: venta.NroOrdenVta,
                CodMedicamento: item.CodMedicamento,
                cantidadRequerida: item.cantidadRequerida
            });
        }

        res.json({ msg: 'Venta registrada', venta });

    } catch (error) {
        res.status(500).json(error);
    }
};