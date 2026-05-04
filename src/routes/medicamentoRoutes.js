const express = require('express');
const router = express.Router();

const controller = require('../controllers/medicamentoController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

// SOLO LOGUEADOS
router.get('/', auth, controller.getAll);

// SOLO ADMIN crea
router.post('/', auth, role(['ADMIN']), controller.create);

// SOLO ADMIN actualiza
router.put('/:id', auth, role(['ADMIN']), controller.update);

// SOLO ADMIN elimina
router.delete('/:id', auth, role(['ADMIN']), controller.delete);

module.exports = router;