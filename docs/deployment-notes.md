# Deployment Notes (Template)

## Backend
- Deploy on Fly.io/Render/AWS ECS.
- Use managed PostgreSQL.
- Configure Redis for queues + socket scaling.
- Add object storage for provider documents.

## Frontend
- Use Expo EAS build.
- Configure Firebase Cloud Messaging / APNS for push.
- Keep API base URL per environment.

## Security Checklist
- Hash passwords with bcrypt
- Add rate limiting and anti-abuse OTP throttles
- Use signed webhooks for payment verification
- Encrypt sensitive user/provider data at rest
