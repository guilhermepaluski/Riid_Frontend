import axios from 'axios';

const API_BASE = 'http://localhost:5173/api';

export const getBooks = () => axios.get(`${API_BASE}/books`);
