import axios from 'axios'

export const getAllProducts = async () => {
  try {
    const resp = await axios.get('https://fakestoreapi.com/products');

    return resp.data;
  } catch (error) {
    console.error('Error getting the products : ', error)
  }
}
export const getProductById = async (id) => {
  try {
    
    const resp = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return resp.data;
  } catch (error) {
    console.error('Error getting the products : ', error)
  }
}