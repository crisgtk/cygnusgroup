import axios from 'axios';


const API_BASE_URL = process.env.REACT_APP_API_URL;

export const getProperties = async (id= '') => {
  try {
    const url = id ? `${API_BASE_URL}/menu/getProperties/${id}` : `${API_BASE_URL}/menu/getProperties`;
    const response = await axios.get(url);
    
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
export const getPropertyForSlice = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/menu/getPropertyForSlice`);

    if (response.data.status === 0) {
      return JSON.parse(response.data.value);
    } else {
      throw new Error(response.data.errorMessage || 'Error al obtener la descripción de las propiedades');
    }

  } catch (error) {
    throw new Error(error.message);
  }
};
export const getPropertyForCities = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/menu/getPropertyForCities`);

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
      const response = await axios.post(`${API_BASE_URL}/properties/InsertProperty`, propertyData, {
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
export const updateStatusProperty = async (id, status) => {
  try {
    const url = `${API_BASE_URL}/properties/updateStatusProperty/${id}/${status}`;
    const response = await axios.get(url);
    
    if (response.data.status === 0) {
      return JSON.parse(response.data.status);
    } else {
      throw new Error(response.data.errorMessage || 'Error al obtener las propiedades');
    }

  } catch (error) {
    throw new Error(error.message);
  }
};

export default {
    getProperties,
    getPropertyDescriptions,
    getPropertyForCities,
    getPropertyForSlice,
    insertProperty
};
