// controllers/qrController.js
const math = require('mathjs');

const qrController = {
    qrFactorization: (req, res) => {
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
    }
};

module.exports = qrController;