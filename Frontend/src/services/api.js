import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Backend API base URL
});

export const getProducts = () => {
  return instance.get('/products').then((response) => response.data);
};

export const placeOrder = (orderData) => {
  return instance.post('/place-order', orderData).then((response) => response.data);
};

export const addToCart = (productId) => {
  // Simulate a POST request to add the product to the cart
  return instance.post('/add-to-cart', { productId }).then((response) => response.data);
};
