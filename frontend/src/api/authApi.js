import { api } from './client';

export const authApi = {
  register: (payload) => api.post('/auth/register', payload),
  login: (payload) => api.post('/auth/login', payload),
  requestOtp: (payload) => api.post('/auth/otp/request', payload),
  socialLogin: (payload) => api.post('/auth/social/login', payload)
};
