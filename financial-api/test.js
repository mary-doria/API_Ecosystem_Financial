const { recomendarProductos } = require('./main');

// Datos del cliente proporcionados
const cliente = {
    codigo: "C006",
    nombreCompleto: "Nestor Herrera",
    claveAcceso: "123456",
    ingresos: 1000000,
    ciudadUbicacion: "Pereira",
    edad: 50
};

// Llama a la función de recomendación de productos con los datos del cliente
const recomendaciones = recomendarProductos(cliente.ingresos, cliente.ciudadUbicacion, cliente.edad);

// Muestra los productos recomendados en la consola
console.log('Productos recomendados:', recomendaciones);
