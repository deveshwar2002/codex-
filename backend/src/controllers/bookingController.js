import { availabilityService } from '../services/availabilityService.js';
import { notificationService } from '../services/notificationService.js';

export const bookingController = {
  checkAvailability: async (req, res) => {
    const result = await availabilityService.getSlots(req.query.providerId, req.query.date);
    res.json(result);
  },

  createBooking: async (req, res) => {
    // TODO: persist booking in DB and lock slot transactionally.
    const booking = { id: 'bk_123', status: 'pending', ...req.body };
    await notificationService.emitBookingUpdate(booking.id, 'pending');
    res.status(201).json(booking);
  },

  updateBookingStatus: async (req, res) => {
    const { bookingId } = req.params;
    const { status } = req.body;
    await notificationService.emitBookingUpdate(bookingId, status);
    res.json({ bookingId, status });
  }
};
