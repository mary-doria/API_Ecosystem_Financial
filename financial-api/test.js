// Importar la función a testear desde el archivo main.js
const { recomendarProductos } = require('./main.js');

// Describir el conjunto de pruebas para la función recomendarProductos
describe('recomendarProductos function', () => {
  // Prueba: debería recomendar "Cuenta de ahorros" para clientes colombianos mayores de 18 años
  test('should recommend "Cuenta de ahorros" for Colombian customers over 18 years old', () => {
    // Datos simulados del cliente
    const cliente = {
      codigo: "C001",
      nombreCompleto: "Juan Perez",
      claveAcceso: "123456",
      ingresos: 2000,
      ciudadUbicacion: "Colombia",
      edad: 20
    };
  
    // Llamar a la función para obtener las recomendaciones
    const recomendaciones = recomendarProductos(cliente.ingresos, cliente.ciudadUbicacion, cliente.edad);
  
    // Afirmar que el resultado contiene "Cuenta de ahorros"
    expect(recomendaciones.some(producto => producto.descripcion === 'Cuenta de ahorros')).toBe(true);
  });

  // Prueba: debería recomendar "Tarjeta débito" para clientes colombianos mayores de 18 años con un ingreso mínimo de $1,300,000
  test('should recommend "Tarjeta débito" for Colombian customers over 18 years old with minimum income of $1,300,000', () => {
    // Datos simulados del cliente
    const cliente = {
      codigo: "C002",
      nombreCompleto: "Maria Rodriguez",
      claveAcceso: "123456",
      ingresos: 1500000,
      ciudadUbicacion: "Colombia",
      edad: 25
    };
  
    // Llamar a la función para obtener las recomendaciones
    const recomendaciones = recomendarProductos(cliente.ingresos, cliente.ciudadUbicacion, cliente.edad);
  
    // Afirmar que el resultado contiene "Tarjeta débito"
    expect(recomendaciones.some(producto => producto.descripcion === 'Tarjeta débito')).toBe(true);
  });

  // Prueba: debería recomendar "Tarjeta crédito" para clientes colombianos mayores de 20 años con un ingreso mínimo de $2,500,000
  test('should recommend "Tarjeta crédito" for Colombian customers over 20 years old with minimum income of $2,500,000', () => {
    // Datos simulados del cliente
    const cliente = {
      codigo: "C003",
      nombreCompleto: "Luisa Gomez",
      claveAcceso: "qwerty",
      ingresos: 3000000,
      ciudadUbicacion: "Colombia",
      edad: 22
    };
  
    // Llamar a la función para obtener las recomendaciones
    const recomendaciones = recomendarProductos(cliente.ingresos, cliente.ciudadUbicacion, cliente.edad);
  
    // Afirmar que el resultado contiene "Tarjeta crédito"
    expect(recomendaciones.some(producto => producto.descripcion === 'Tarjeta crédito')).toBe(true);
  });

  // Prueba: debería recomendar "Seguro" para clientes mayores de 15 años con un ingreso mínimo de $800,000
  test('should recommend "Seguro" for customers over 15 years old with minimum income of $800,000', () => {
    // Datos simulados del cliente
    const cliente = {
      codigo: "C004",
      nombreCompleto: "Pedro Ramirez",
      claveAcceso: "abcdef",
      ingresos: 900000,
      ciudadUbicacion: "Mexico",
      edad: 18
    };
  
    // Llamar a la función para obtener las recomendaciones
    const recomendaciones = recomendarProductos(cliente.ingresos, cliente.ciudadUbicacion, cliente.edad);
  
    // Afirmar que el resultado contiene "Seguro"
    expect(recomendaciones.some(producto => producto.descripcion === 'Seguro')).toBe(true);
  });

  // Prueba: debería recomendar "Inversiones" para clientes mayores de 25 años con un ingreso mínimo de $4,500,000
  test('should recommend "Inversiones" for customers over 25 years old with minimum income of $4,500,000', () => {
    // Datos simulados del cliente
    const cliente = {
      codigo: "C005",
      nombreCompleto: "Ana Martinez",
      claveAcceso: "123456",
      ingresos: 5000000,
      ciudadUbicacion: "Colombia",
      edad: 30
    };
  
    // Llamar a la función para obtener las recomendaciones
    const recomendaciones = recomendarProductos(cliente.ingresos, cliente.ciudadUbicacion, cliente.edad);
  
    // Afirmar que el resultado contiene "Inversiones"
    expect(recomendaciones.some(producto => producto.descripcion === 'Inversiones')).toBe(true);
  });

  // Prueba: debería recomendar "Giros" para clientes de Colombia, Peru, Ecuador y Panama
  test('should recommend "Giros" for customers from Colombia, Peru, Ecuador, Panama', () => {
    // Datos simulados del cliente
    const cliente = {
      codigo: "C006",
      nombreCompleto: "Carlos Torres",
      claveAcceso: "abcdef",
      ingresos: 1200000,
      ciudadUbicacion: "Peru",
      edad: 40
    };
  
    // Llamar a la función para obtener las recomendaciones
    const recomendaciones = recomendarProductos(cliente.ingresos, cliente.ciudadUbicacion, cliente.edad);
  
    // Afirmar que el resultado contiene "Giros"
    expect(recomendaciones.some(producto => producto.descripcion === 'Giros')).toBe(true);
  });

  // Prueba: debería recomendar "Tarjeta amparada" para clientes mayores de 15 años con una tarjeta principal
  test('should recommend "Tarjeta amparada" for customers over 15 years old with a main card', () => {
    // Datos simulados del cliente
    const cliente = {
      codigo: "C007",
      nombreCompleto: "Laura Ramirez",
      claveAcceso: "123456",
      ingresos: 1500000,
      ciudadUbicacion: "Colombia",
      edad: 15
    };
  
    // Llamar a la función para obtener las recomendaciones
    const recomendaciones = recomendarProductos(cliente.ingresos, cliente.ciudadUbicacion, cliente.edad);
  
    // Afirmar que el resultado contiene "Tarjeta amparada"
    expect(recomendaciones.some(producto => producto.descripcion === 'Tarjeta amparada')).toBe(true);
  });
});
