const express = require('express');

const recommendationRoutes = require('./routes/recommendationCustomer'); // Importa las rutas de recomendación
const recommendationProductsRoutes = require('./routes/recommendationProducts');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Configuración de las rutas de clientes

app.use('/recommendation', recommendationRoutes);
app.use('/recommendationProducts', recommendationProductsRoutes);



// Ruta de inicio
app.get('/', (req, res) => {
    res.send('¡Bienvenido al servidor del ecosistema financiero!');
});

// Manejador de errores para rutas no encontradas
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});

// Manejador de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Hubo un error en el servidor');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});