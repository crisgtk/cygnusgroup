const axios = require('axios');

// Definir la URL base
const API_BASE_URL = process.env.REACT_APP_API_URL;

// Función para obtener datos desde tu API .NET
async function getMenu() {
    try {
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

async function getLocations() {
    try {
        const response = await axios.get(`${API_BASE_URL}/menu/getLocations`);
        
        if (response.data.status === 0) {
            const menuItems = JSON.parse(response.data.value);
            return menuItems;
        } else {
            throw new Error(response.data.errorMessage || 'Error al obtener el menú');
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
}


async function getUser(email, password) {
    try {
        const response = await axios.post(`${API_BASE_URL}/menu/ShearchUser`, { email, password });
        
        if (response.data.status === 0) {
            return JSON.parse(response.data.value);
        } else {
            throw new Error(response.data.errorMessage || 'Error al obtener el usuario');
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
}
module.exports = {
    getMenu,
    getLocations,
    getUser
};

