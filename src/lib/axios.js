import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  withCredentials: true,
});

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const signup = async (email, password, name) => {
  const response = await api.post('/auth/signup', { email, password, name });
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const getAllBooks = async () => {
  const response = await api.get('/books');
  return response.data;
};

export const getWishlist = async () => {
  const response = await api.get('/books/wishlist');
  return response.data;
};

export const addToWishlist = async (bookId) => {
  const response = await api.post('/books/wishlist', { bookId });
  return response.data;
};

export const createBook = async (bookData) => {
  const response = await api.post('/books/create-book', bookData);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get('/auth/get-current-user');
  return response.data;
};

export default api;