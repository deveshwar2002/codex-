export const adminController = {
  dashboard: async (_req, res) => {
    res.json({
      totalUsers: 0,
      totalProviders: 0,
      totalBookings: 0,
      totalRevenue: 0,
      bookingTrend: []
    });
  }
};
