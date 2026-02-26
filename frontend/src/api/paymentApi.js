import { api } from './client';

export const paymentApi = {
  createIntent: (payload) => api.post('/payments/intent', payload),
  verify: (payload) => api.post('/payments/verify', payload),
  history: () => api.get('/payments/history')
};
