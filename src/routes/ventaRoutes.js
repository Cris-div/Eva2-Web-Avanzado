const express = require('express');
const router = express.Router();

const controller = require('../controllers/ventaController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

// SOLO VENDEDOR o ADMIN
router.post('/', auth, role(['ADMIN', 'VENDEDOR']), controller.crearVenta);

module.exports = router;