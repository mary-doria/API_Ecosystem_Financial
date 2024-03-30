const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Ruta al archivo Swagger JSON

const app = express();
const PORT = 3000;

// Middleware para parsear el body de las solicitudes como JSON
app.use(express.json());

// Endpoint para recomendar productos
app.post('/recomendar', (req, res) => {
    try {
        // Obtener datos del cuerpo de la solicitud
        const { ingresos, ciudadUbicacion, edad } = req.body;

        // Llamar a la función para recomendar productos
        const recomendaciones = recomendarProductos(ingresos, ciudadUbicacion, edad);

        // Enviar la respuesta con las recomendaciones
        res.status(200).json(recomendaciones);
    } catch (error) {
        // Manejo de errores
        console.error('Error al recomendar productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta para servir la interfaz de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}/`);
});
