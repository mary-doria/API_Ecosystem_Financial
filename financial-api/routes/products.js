const express = require("express");
const _ = require("underscore");

// Aquí simulamos la data de los productos
const products = [
    {
        "codigo": "P001",
        "descripcion": "Cuenta de ahorros",
        "condiciones": {
            "pais": "Colombia",
            "edadMinima": 18
        }
    },
    {
        "codigo": "P002",
        "descripcion": "Tarjeta débito",
        "condiciones": {
            "pais": "Colombia",
            "edadMinima": 18,
            "ingresosMinimos": 1300000
        }
    },
    {
        "codigo": "P003",
        "descripcion": "Tarjeta crédito",
        "condiciones": {
            "pais": "Colombia",
            "edadMinima": 20,
            "ingresosMinimos": 2500000
        }
    },
    {
        "codigo": "P004",
        "descripcion": "Seguro",
        "condiciones": {
            "edadMinima": 15,
            "ingresosMinimos": 800000
        }
    },
    {
        "codigo": "P005",
        "descripcion": "Inversiones",
        "condiciones": {
            "edadMinima": 25,
            "ingresosMinimos": 4500000
        }
    },
    {
        "codigo": "P006",
        "descripcion": "Giros",
        "condiciones": {
            "pais": ["Colombia", "Peru", "Ecuador", "Panama"]
        }
    },
    {
        "codigo": "P007",
        "descripcion": "Tarjeta amparada",
        "condiciones": {
            "edadMinima": 15
        }
    }
];

const router = express.Router();

// Endpoint para obtener todos los productos
router.get("/", (req, res) => {
  res.json(products);
});

// Endpoint para agregar un nuevo producto
router.post("/", (req, res) => {
  const newProduct = req.body;

  if (newProduct) {
    products.push(newProduct);
    res.json(products);
  } else {
    res.status(500).json({ error: "Hubo un error al procesar la solicitud." });
  }
});



module.exports = router;
