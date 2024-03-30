const express = require('express');
const { recomendarProductos } = require('../main');  // Ajusta la ruta según la ubicación de tu archivo

const router = express.Router();

// Endpoint para recomendar productos a un cliente específico
router.get('/', (req, res) => {
    const cliente = {
        "codigo": "C004",
        "nombreCompleto": "Angelica Rios",
        "claveAcceso": "abc199",
        "ingresos": 1000,
        "ciudadUbicacion": "Medellin",
        "edad": 36
    };

    // Llamamos a la función recomendarProductos con los datos del cliente
    const productosRecomendados = recomendarProductos(cliente.ingresos, cliente.ciudadUbicacion, cliente.edad);
    console.log('Productos recomendados:', productosRecomendados);


    // Devolvemos los productos recomendados como respuesta
    res.json({ customerId: cliente.codigo, recommendations: productosRecomendados });
});

module.exports = router;
