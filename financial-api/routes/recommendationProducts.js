const express = require('express');
const router = express.Router();

// Importar la función necesaria desde el archivo main.js
const { obtenerClientesPorProducto } = require('../main');

// Definir el endpoint GET '/'
router.get('/', async (req, res) => {
    try {

        const recomendacionesClientes = obtenerClientesPorProducto();
        

        res.json(recomendacionesClientes);
    } catch (error) {

        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;
