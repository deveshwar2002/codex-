# Home Services Marketplace Template (UrbanClap-style)

This repository contains a **full-stack starter template** for an on-demand home services marketplace with:
- Mobile-first frontend (React Native + Expo)
- Backend API (Node.js + Express + Prisma)
- Realtime chat/notifications (Socket.IO)
- Payments-ready architecture (Stripe/Razorpay adapters)
- Admin dashboard API foundations

## Project Structure

```text
.
├── backend
│   ├── prisma
│   │   └── schema.prisma
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── sockets
│   │   ├── utils
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── navigation
│   │   ├── screens
│   │   ├── store
│   │   ├── theme
│   │   ├── utils
│   │   └── App.js
│   └── package.json
└── docs
    ├── api-contract.md
    └── deployment-notes.md
```

## Features Included in Template

### 1) Core Functionality
- User & provider registration/login skeletons
- JWT-based auth + OTP/social login placeholders
- Geo-location based provider discovery endpoint design
- Category search/filter structures

### 2) Booking System
- Booking lifecycle: pending → confirmed → in_progress → completed/cancelled
- Time-slot availability service scaffold
- Booking confirmation events + push notification hooks

### 3) In-App Communication
- Socket.IO chat room and event model
- Notification events for booking and chat updates

### 4) Payments
- Payment intent + verification placeholders
- Razorpay/Stripe adapter patterns
- Payment history endpoints + promo code model

### 5) Reviews & Ratings
- Review submission endpoint scaffold
- Aggregate provider rating fields

### 6) Admin
- Users/providers/services/bookings/revenue analytics APIs
- Role-based middleware hooks

### 7) Extras
- Service history endpoints
- Profile update stubs
- Mobile-first reusable UI components

## Quick Start (Template)

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

> This is intentionally a template with comments/TODOs where app-specific implementation decisions are required.
