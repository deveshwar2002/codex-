# API Contract (Template)

## Auth
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/otp/request`
- `POST /api/v1/auth/social/login`

## Services
- `GET /api/v1/services/categories`
- `GET /api/v1/services/discover?lat=&lng=&category=`

## Bookings
- `GET /api/v1/bookings/availability?providerId=&date=`
- `POST /api/v1/bookings`
- `PATCH /api/v1/bookings/:bookingId/status`

## Payments
- `POST /api/v1/payments/intent`
- `POST /api/v1/payments/verify`
- `GET /api/v1/payments/history`

## Reviews
- `POST /api/v1/reviews`
- `GET /api/v1/reviews/provider/:providerId`

## Admin
- `GET /api/v1/admin/dashboard`
