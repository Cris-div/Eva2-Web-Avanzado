const express = require('express');
const router = express.Router();

const controller = require('../controllers/compraController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

// SOLO ALMACEN o ADMIN
router.post('/', auth, role(['ADMIN', 'ALMACEN']), controller.crearCompra);

module.exports = router;