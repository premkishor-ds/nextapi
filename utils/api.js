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

export const loginUser = async ({ email, password }) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  // You might want to return the response or specific data from the API
  // const data = await response.json();
  // return data;
};

export const signupUser = async ({ email, password }) => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Signup failed');
  }

  // You might want to return the response or specific data from the API
  // const data = await response.json();
  // return data;
};

export const forgotPassword = async ({ email }) => {
  const response = await fetch(`${API_BASE_URL}/forgotpassword`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error('Forgot password request failed');
  }

  // You might want to return the response or specific data from the API
  // const data = await response.json();
  // return data;
};