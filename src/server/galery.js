import axios from 'axios';

const API_BASE_URL = 'http://crisgtk.cl/apiarr';

export const getGallery = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/galery/GetGalery/${id}`);
        
        
        if (response.data.status === 0) {
        return JSON.parse(response.data.value);
        } else {
        throw new Error(response.data.errorMessage || 'Error al obtener la galería');
        }
    
    } catch (error) {
        throw new Error(error.message);
    }
    }

    export default {
        getGallery
    };