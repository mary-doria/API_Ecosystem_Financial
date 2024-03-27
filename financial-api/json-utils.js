const fs = require('fs');
const path = require('path');

// Función para leer el archivo JSON
const leerArchivoJSON = (nombreArchivo) => {
    try {
        const rutaArchivo = path.join(__dirname, 'data', nombreArchivo);
        const datosJSON = fs.readFileSync(rutaArchivo, 'utf8');
        return JSON.parse(datosJSON);
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return null;
    }
};

// Ejemplo de uso
const clientes = leerArchivoJSON('Customer.json');
const productos = leerArchivoJSON('Products.json');

if (clientes && productos) {
    console.log('Clientes:', clientes);
    console.log('Productos:', productos);
} else {
    console.log('No se pudieron leer los archivos JSON.');
}
