const express = require('express');
const customerRoutes = require('./routes/customer');
const productRoutes = require('./routes/products');
const recommendationRoutes = require('./routes/recommendationCustomer'); // Importa las rutas de recomendación

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Configuración de las rutas de clientes
app.use('/customers', customerRoutes);

app.use('/products', productRoutes);

app.use('/recommendation', recommendationRoutes);


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