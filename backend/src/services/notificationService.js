let ioRef;

export const notificationService = {
  setIo: (io) => {
    ioRef = io;
  },

  emitBookingUpdate: async (bookingId, status) => {
    if (!ioRef) return;
    ioRef.to(`booking:${bookingId}`).emit('booking:status', { bookingId, status });
    // TODO: trigger FCM/APNS push notifications.
  }
};
