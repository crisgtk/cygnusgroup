const axios = require('axios');

// Definir la URL base
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://localhost:5001';

// Función para obtener datos desde tu API .NET
async function getMenu() {
    try {
        console.log("API_BASE_URL:::", API_BASE_URL);
        const response = await axios.get(`${API_BASE_URL}/menu/getMenu`);
        
        // Verificar si la respuesta es exitosa (status = 0)
        if (response.data.status === 0) {
            // Parsear el string JSON que viene en el campo 'value'
            const menuItems = JSON.parse(response.data.value);
            
            // Transformar al formato requerido
            return [{
                label: "Dashboard",
                subMenuItems: menuItems.filter(item => item.label !== "Principal") // Excluimos "Principal" del submenu
            }];
        } else {
            throw new Error(response.data.errorMessage || 'Error al obtener el menú');
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
}

module.exports = {
    getMenu
};

