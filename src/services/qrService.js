// services/qrService.js
const math = require('mathjs');

const qrService = {
    performQrFactorization: (matrix) => {
        if (!matrix || !Array.isArray(matrix) || matrix.length === 0) {
            throw new Error('Invalid matrix input');
        }

        return math.qr(matrix);
    }
};

module.exports = qrService;