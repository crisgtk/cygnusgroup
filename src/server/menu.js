const axios = require('axios');

// Definir la URL base
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

// Función para obtener datos desde tu API .NET
async function getMenu() {
    try {
        // Ya no necesitas la URL completa, solo la ruta
        const response = await axios.get('/menu/getMenu');
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
}

module.exports = {
    getMenu
};

