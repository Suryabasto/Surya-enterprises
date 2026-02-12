# Surya Enterprises Backend

This is the backend for Surya Enterprises online store, built with Node.js, Express, and MongoDB.

## Features
- REST API for products, users, and orders
- MongoDB integration via Mongoose
- JWT-based authentication (for users and orders)

## Setup
1. Install dependencies:
   ```
   npm install
   ```
2. Set up MongoDB (local or Atlas) and update `.env` as needed.
3. Start the server:
   ```
   npm run dev
   ```

## API Endpoints
- Products: `/api/products`
- Users: `/api/users`
- Orders: `/api/orders`

## Project Structure
- `src/` - Main server code
- `models/` - Mongoose models
- `routes/` - Express route handlers
- `controllers/` - Business logic
- `config/` - Configuration files

---
Replace placeholder secrets in `.env` before deploying to production.
