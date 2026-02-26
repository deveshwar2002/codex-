export const reviewController = {
  addReview: async (req, res) => {
    // TODO: ensure booking is completed before allowing review.
    res.status(201).json({ id: 'rvw_1', ...req.body });
  },

  listProviderReviews: async (req, res) => {
    res.json({ providerId: req.params.providerId, reviews: [] });
  }
};
