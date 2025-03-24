import axios from 'axios';


const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://localhost:5001';

export const getProperties = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/menu/getProperties`);
    
    if (response.data.status === 0) {
      return JSON.parse(response.data.value);
    } else {
      throw new Error(response.data.errorMessage || 'Error al obtener las propiedades');
    }

  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPropertyDescriptions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/menu/getPropertyDescriptions`);

    if (response.data.status === 0) {
      return JSON.parse(response.data.value);
    } else {
      throw new Error(response.data.errorMessage || 'Error al obtener la descripción de las propiedades');
    }

  } catch (error) {
    throw new Error(error.message);
  }
};

export async function insertProperty(propertyData) {
  try {
      const response = await axios.post('http://localhost:5000/properties/InsertProperty', propertyData, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
      
      if (response.data.status === 0) {
          return response.data.value;
      } else {
          throw new Error(response.data.errorMessage || 'Error al insertar la propiedad');
      }
  } catch (error) {
      console.error('Error al insertar la propiedad:', error);
      throw error;
  }
}

export default {
    getProperties,
    getPropertyDescriptions,
    insertProperty
};
