const express = require("express");
const _ = require("underscore");

// Aquí simulamos la data de los clientes
const customers = [
    {
        "codigo": "C001",
        "nombreCompleto": "Juan Perez",
        "claveAcceso": "123456",
        "ingresos": 1500000,
        "ciudadUbicacion": "Bogotá",
        "edad": 25
    },
    {
        "codigo": "C002",
        "nombreCompleto": "Maria Rodriguez",
        "claveAcceso": "qwerty",
        "ingresos": 3000000,
        "ciudadUbicacion": "Medellín",
        "edad": 30
    },
    {
        "codigo": "C003",
        "nombreCompleto": "Luis Hernandez",
        "claveAcceso": "abc123",
        "ingresos": 200000,
        "ciudadUbicacion": "Cali",
        "edad": 28
    },
    {
        "codigo": "C004",
        "nombreCompleto": "Angelica Rios",
        "claveAcceso": "abc199",
        "ingresos": 1000,
        "ciudadUbicacion": "Medellin",
        "edad": 36
    },
    {
        "codigo": "C005",
        "nombreCompleto": "Zoe Doria",
        "claveAcceso": "abg123",
        "ingresos": 2000000,
        "ciudadUbicacion": "Monteria",
        "edad": 17
    },
    {
        "codigo": "C006",
        "nombreCompleto": "Nestor Herrera",
        "claveAcceso": "123456",
        "ingresos": 1000000,
        "ciudadUbicacion": "Pereira",
        "edad": 50
    }
];

const router = express.Router();

// Endpoint para obtener todos los clientes
router.get("/", (req, res) => {
  res.json(customers);
});

// Endpoint para agregar un nuevo cliente
router.post("/", (req, res) => {
  const newCustomer = req.body;

  if (newCustomer) {
    customers.push(newCustomer);
    res.json(customers);
  } else {
    res.status(500).json({ error: "Hubo un error al procesar la solicitud." });
  }
});

// Endpoint para actualizar un cliente por su código
router.put("/:codigo", (req, res) => {
  const { codigo } = req.params;
  const updatedCustomer = req.body;

  if (codigo && updatedCustomer) {
    const index = customers.findIndex(customer => customer.codigo === codigo);
    if (index !== -1) {
      customers[index] = { ...customers[index], ...updatedCustomer };
      res.json(customers);
    } else {
      res.status(404).json({ error: "Cliente no encontrado." });
    }
  } else {
    res.status(500).json({ error: "Hubo un error al procesar la solicitud." });
  }
});

// Endpoint para eliminar un cliente por su código
router.delete("/:codigo", (req, res) => {
  const { codigo } = req.params;

  if (codigo) {
    const index = customers.findIndex(customer => customer.codigo === codigo);
    if (index !== -1) {
      customers.splice(index, 1);
      res.json(customers);
    } else {
      res.status(404).json({ error: "Cliente no encontrado." });
    }
  } else {
    res.status(500).json({ error: "Hubo un error al procesar la solicitud." });
  }
});

module.exports = router;
