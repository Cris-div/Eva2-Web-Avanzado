const Medicamento = require('../models/medicamento');

// CREAR
exports.create = async (req, res) => {
    try {
        const med = await Medicamento.create(req.body);
        res.json(med);
    } catch (error) {
        res.status(500).json(error);
    }
};

// LISTAR
exports.getAll = async (req, res) => {
    const meds = await Medicamento.findAll();
    res.json(meds);
};

// ACTUALIZAR
exports.update = async (req, res) => {
    await Medicamento.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ msg: 'Actualizado' });
};

// ELIMINAR
exports.delete = async (req, res) => {
    await Medicamento.destroy({
        where: { id: req.params.id }
    });
    res.json({ msg: 'Eliminado' });
};