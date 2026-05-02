const express = require('express');
const router = express.Router();
const plantaController = require('../controllers/plantaController');

// Definición de las rutas y conexión con el controlador
router.post('/', plantaController.crearPlanta);
router.get('/', plantaController.obtenerPlantas);
router.put('/:id', plantaController.actualizarPlanta);
router.delete('/:id', plantaController.eliminarPlanta);

// Ruta específica para los riegos
router.post('/:id/riegos', plantaController.agregarRiego);

module.exports = router;