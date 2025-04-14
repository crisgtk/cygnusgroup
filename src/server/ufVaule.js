export const getUFValue = async () => {
    try {
      const response = await fetch('https://mindicador.cl/api/uf');
      const data = await response.json();
      return data.serie[0].valor;
    } catch (error) {
      console.error('Error fetching UF value:', error);
      throw error;
    }
  };
  
  export default getUFValue;