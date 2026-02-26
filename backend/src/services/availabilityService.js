export const availabilityService = {
  getSlots: async (providerId, date) => {
    // TODO: derive slots from provider working hours + existing bookings.
    return {
      providerId,
      date,
      slots: [
        { start: '09:00', end: '10:00', available: true },
        { start: '10:00', end: '11:00', available: false }
      ]
    };
  }
};
