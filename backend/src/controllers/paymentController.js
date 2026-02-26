export const paymentController = {
  createPaymentIntent: async (req, res) => {
    // TODO: route to Stripe/Razorpay adapter based on user location / config.
    res.json({ paymentIntentId: 'pi_template', methodOptions: ['card', 'upi', 'wallet'], ...req.body });
  },

  verifyPayment: async (_req, res) => {
    // TODO: verify provider signature and store transaction row.
    res.json({ verified: true });
  },

  listPaymentHistory: async (_req, res) => {
    // TODO: fetch transaction history from DB by user/provider id.
    res.json([]);
  }
};
