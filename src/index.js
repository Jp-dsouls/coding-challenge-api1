const express = require('express');
const math = require('mathjs');
const app = express();
const port = 4000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint para la factorización QR
app.post('/qr-factorization', (req, res) => {
    const matrix = req.body.matrix;

    if (!matrix || !Array.isArray(matrix) || matrix.length === 0) {
        return res.status(400).json({ error: 'Invalid matrix input' });
    }

    try {
        const qr = math.qr(matrix);
        res.json({ Q: qr.Q, R: qr.R });
    } catch (error) {
        res.status(500).json({ error: 'Error during QR factorization' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`El aPI 1 corre en el puerto: ${port} y su url es -->  http://localhost:${port}`);
});