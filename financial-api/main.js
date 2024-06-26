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
                return clienteDePaisesPermitidos(ciudad);
            case 'Tarjeta amparada':
                return edad >= 15;
            default:
                return false;
        }
    });

    return productosRecomendados;
};

// Función para recomendar clientes para un producto específico
const obtenerClientesPorProducto = () => {
    const clientes = leerClientesJSON();
    const productos = leerProductosJSON();

    // Objeto para almacenar las listas de clientes por producto
    const clientesPorProducto = {};

    // Iterar sobre cada producto
    productos.forEach(producto => {
        const codigoProducto = producto.codigo;
        const nombreProducto = producto.descripcion;
        clientesPorProducto[codigoProducto] = { nombre: nombreProducto, clientes: [] };

        clientes.forEach(cliente => {
            const condiciones = producto.condiciones;

            if (cliente.edad >= condiciones.edadMinima) {
                if (condiciones.ingresosMinimos === undefined || cliente.ingresos >= condiciones.ingresosMinimos) {
                    clientesPorProducto[codigoProducto].clientes.push(cliente.nombreCompleto);
                }
            }
        });
    });

    return clientesPorProducto;
};


// Función para verificar si el cliente es colombiano y mayor de edad
const clienteColombianoMayorDeEdad = (edad) => {
    // Verificar si el cliente es colombiano y mayor de edad (mayor o igual a 18 años)
    return edad >= 18; // Devuelve true si el cliente es mayor o igual a 18 años, de lo contrario devuelve false
};


const clienteDePaisesPermitidos = (pais) => {

    return ['Colombia', 'Peru', 'Ecuador', 'Panama'].includes(pais);
};

// Función para obtener la lista completa de productos
const obtenerListaProductos = () => {
    return leerProductosJSON();
};

module.exports = { recomendarProductos, obtenerClientesPorProducto, leerProductosJSON, obtenerListaProductos };
