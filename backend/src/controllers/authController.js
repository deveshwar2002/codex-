import jwt from 'jsonwebtoken';

export const authController = {
  register: async (req, res) => {
    // TODO: create user/provider based on role and persist to DB.
    const { email, role = 'user' } = req.body;
    return res.status(201).json({ id: 'temp-id', email, role });
  },

  login: async (req, res) => {
    // TODO: validate credentials from DB.
    const { email } = req.body;
    const token = jwt.sign({ sub: 'temp-id', email, role: 'user' }, process.env.JWT_SECRET || 'dev-secret');
    return res.json({ accessToken: token, refreshToken: 'refresh-token-placeholder' });
  },

  requestOtp: async (_req, res) => {
    // TODO: integrate SMS provider for OTP delivery.
    return res.json({ message: 'OTP sent (template response)' });
  },

  socialLogin: async (_req, res) => {
    // TODO: integrate Google/Apple/Facebook OAuth verification.
    return res.json({ message: 'Social login verified (template response)' });
  }
};
