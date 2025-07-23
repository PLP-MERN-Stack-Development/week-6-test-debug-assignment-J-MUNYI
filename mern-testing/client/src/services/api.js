import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchBugs = () => API.get('/bugs');
export const createBug = (bug) => API.post('/bugs', bug);
export const updateBug = (id, status) => API.put(`/bugs/${id}`, { status });
export const deleteBug = (id) => API.delete(`/bugs/${id}`);
