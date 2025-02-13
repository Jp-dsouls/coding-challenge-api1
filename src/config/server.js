// config/server.js
const express = require('express');
const qrRoutes = require('../routes/qrRoutes');

const app = express();
const port = 4000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', qrRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`El API corre en el puerto: ${port} y su url es -->  http://localhost:${port}`);
});