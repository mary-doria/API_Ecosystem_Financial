const express = require('express');
const fs = require('fs').promises; // Usa la API de promesas de fs para facilitar el uso de async/await
const { recomendarProductos } = require('../main');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // Asegúrate de que la ruta al archivo sea correcta respecto a la ubicación de este script
        const data = await fs.readFile('C:\\Users\\mary.doriag_pragma\\Desktop\\ecosistemaFin\\API_Ecosistema_Financiero\\financial-api\\data\\Customer.json', { encoding: 'utf8' });
        const clientes = JSON.parse(data);
        
        // Itera sobre cada cliente y calcula sus productos recomendados
        const recomendaciones = clientes.map(cliente => {
            // Asume que la función recomendarProductos devuelve las recomendaciones basadas en los parámetros proporcionados
            const productosRecomendados = recomendarProductos(cliente.ingresos, cliente.ciudadUbicacion, cliente.edad);
            console.log('Productos recomendados para', cliente.nombreCompleto, ':', productosRecomendados);

            // Agrega las recomendaciones de productos al objeto del cliente
            return {
                customerName: cliente.nombreCompleto,
                customerId: cliente.codigo,
                recommendations: productosRecomendados
            };
        });

        // Envía la respuesta con la lista de clientes y sus productos recomendados
        res.json(recomendaciones);
    } catch (error) {
        console.error('Error al leer el archivo Customer.json:', error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;
