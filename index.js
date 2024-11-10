<<<<<<< HEAD
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal que sirve el archivo HTML
app.get('/', (req, res) => {
    res.send("PAGINA PRINCIPAL - GRUPO#3");
});

// Ruta para obtener la lista de integrantes en formato JSON
app.get('/integrantes', (req, res) => {
    res.json([
        { "nombre": "Jose", "apellido": "Lincango", "edad": 20 },
        { "nombre": "Alejandro", "apellido": "Gutierrez", "edad": 20 },
        { "nombre": "Wilmer", "apellido": "Vargas", "edad": 20 },
        { "nombre": "Darwin", "apellido": "Cachimil", "edad": 27 },
        { "nombre": "Anderson", "apellido": "Vilatuna", "edad": 21 },
        { "nombre": "Andres", "apellido": "Tufino", "edad": 20 },
        { "nombre": "Francis", "apellido": "Guaman", "edad": 22 }
    ]);
});

// Ruta de productos (solo muestra un mensaje simple)
app.get('/products', (req, res) => {
    res.send(`
        <h1>Catálogo de productos</h1>
        <p>Bienvenidos</p>
    `);
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
=======
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal que sirve el archivo HTML
app.get('/', (req, res) => {
    res.send("PAGINA PRINCIPAL - GRUPO#3");
});

// Ruta para obtener la lista de integrantes en formato JSON
app.get('/integrantes', (req, res) => {
    res.json([
        { "id": 1, "nombre": "Jose", "apellido": "Lincango", "edad": 20 },
        { "id": 2, "nombre": "Alejandro", "apellido": "Gutierrez", "edad": 20 },
        { "id": 3, "nombre": "Wilmer", "apellido": "Vargas", "edad": 20 },
        { "id": 4, "nombre": "Darwin", "apellido": "Cachimil", "edad": 27 },
        { "id": 5, "nombre": "Anderson", "apellido": "Vilatuna", "edad": 21 },
        { "id": 6, "nombre": "Andres", "apellido": "Tufino", "edad": 20 },
        { "id": 7, "nombre": "Francis", "apellido": "Guaman", "edad": 22 }
    ]);
});

// Ruta para obtener la información de un integrante en función del id
app.get('/integrantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const integrantes = [
        { "id": 1, "nombre": "Jose", "apellido": "Lincango", "edad": 20 },
        { "id": 2, "nombre": "Alejandro", "apellido": "Gutierrez", "edad": 20 },
        { "id": 3, "nombre": "Wilmer", "apellido": "Vargas", "edad": 20 },
        { "id": 4, "nombre": "Darwin", "apellido": "Cachimil", "edad": 27 },
        { "id": 5, "nombre": "Anderson", "apellido": "Vilatuna", "edad": 21 },
        { "id": 6, "nombre": "Andres", "apellido": "Tufino", "edad": 20 },
        { "id": 7, "nombre": "Francis", "apellido": "Guaman", "edad": 22 }
    ];

    const integrante = integrantes.find(i => i.id === id);

    if (integrante) {
        res.json(integrante);
    } else {
        res.status(404).send('Integrante no encontrado');
    }
});

// Ruta de productos (solo muestra un mensaje simple)
app.get('/products', (req, res) => {
    res.send(`
        <h1>Catálogo de productos</h1>
        <p>Bienvenidos</p>
    `);
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

>>>>>>> ffa06d6 (Cambios)
module.exports = app;