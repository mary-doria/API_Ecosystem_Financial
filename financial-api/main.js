const fs = require('fs');
const path = require('path');

// Función para leer el archivo JSON de clientes
const leerClientesJSON = () => {
    try {
        const rutaArchivo = path.join(__dirname, 'data', 'Customer.json');
        const datosJSON = fs.readFileSync(rutaArchivo, 'utf8');
        return JSON.parse(datosJSON);
    } catch (error) {
        console.error('Error al leer el archivo JSON de clientes:', error);
        return [];
    }
};

// Función para leer el archivo JSON de productos
const leerProductosJSON = () => {
    try {
        const rutaArchivo = path.join(__dirname, 'data', 'Products.json');
        const datosJSON = fs.readFileSync(rutaArchivo, 'utf8');
        return JSON.parse(datosJSON);
    } catch (error) {
        console.error('Error al leer el archivo JSON de productos:', error);
        return [];
    }
};

// Función para recomendar productos basados en el perfil del cliente
const recomendarProductos = (ingresos, ciudad, edad) => {
    const clientes = leerClientesJSON();
    const productos = leerProductosJSON();

    // Filtrar productos basados en las reglas de negocio
    const productosRecomendados = productos.filter(producto => {
        // Lógica de filtrado basada en las reglas de negocio
        switch (producto.descripcion) {
            case 'Cuenta de ahorros':
                return clienteColombianoMayorDeEdad(edad) && ingresos > 0;
            case 'Tarjeta débito':
                return clienteColombianoMayorDeEdad(edad) && ingresos >= 1300000;
            case 'Tarjeta crédito':
                return clienteColombianoMayorDeEdad(edad) && ingresos >= 2500000;
            case 'Seguro':
                return edad >= 15 && ingresos >= 800000;
            case 'Inversiones':
                return edad >= 25 && ingresos >= 4500000;
            case 'Giros':
                return clienteDeCiudadesPermitidas(ciudad);
            case 'Tarjeta amparada':
                return edad >= 15;
            default:
                return false;
        }
    });

    return productosRecomendados;
};

// Función para verificar si el cliente es colombiano y mayor de edad
const clienteColombianoMayorDeEdad = (edad) => {
    // Implementa la lógica para verificar si el cliente es colombiano y mayor de edad
    // Esta función debería devolver true o false
    return true; // Ejemplo: siempre devuelve true para este caso
};

// Función para verificar si el cliente es de una ciudad permitida para giros
const clienteDeCiudadesPermitidas = (ciudad) => {
    // Implementa la lógica para verificar si el cliente es de una ciudad permitida para giros
    // Esta función debería devolver true o false
    return ['Colombia', 'Peru', 'Ecuador', 'Panama'].includes(ciudad);
};

module.exports = { recomendarProductos };