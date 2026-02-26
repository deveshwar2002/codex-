import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 10000
});

// TODO: inject auth token from state manager.
