export const serviceController = {
  listCategories: async (_req, res) => {
    res.json([
      { id: 'cleaning', name: 'Cleaning' },
      { id: 'repairs', name: 'Repairs' },
      { id: 'beauty', name: 'Beauty' }
    ]);
  },

  discoverNearbyProfessionals: async (req, res) => {
    const { lat, lng, category } = req.query;
    // TODO: use PostGIS + geo radius query on providers table.
    res.json({ lat, lng, category, professionals: [] });
  }
};
