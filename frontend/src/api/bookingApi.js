import { api } from './client';

export const bookingApi = {
  checkAvailability: (providerId, date) => api.get('/bookings/availability', { params: { providerId, date } }),
  createBooking: (payload) => api.post('/bookings', payload),
  updateStatus: (bookingId, status) => api.patch(`/bookings/${bookingId}/status`, { status })
};
