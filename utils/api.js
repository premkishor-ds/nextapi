// utils/api.js
const API_BASE_URL = 'https://dummyjson.com';

export const getAllProperties = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }

  return response.json();
};

export const getPropertyById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch property by ID');
  }

  return response.json();
};
