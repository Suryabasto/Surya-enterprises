# Surya Enterprises - Backend API

A RESTful API backend for Surya Enterprises online store built with Node.js, Express, and MongoDB.

## Features

- **Product Management**: Full CRUD operations for products
- **User Management**: Create and retrieve user information
- **Order Management**: Place and track orders
- **MongoDB Integration**: Using Mongoose ODM
- **RESTful Architecture**: Clean and organized API endpoints
- **Error Handling**: Comprehensive error handling and validation

## Project Structure

```
Backend/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection configuration
│   ├── controllers/
│   │   ├── productController.js # Product business logic
│   │   ├── userController.js    # User business logic
│   │   └── orderController.js   # Order business logic
│   ├── models/
│   │   ├── Product.js           # Product schema
│   │   ├── User.js              # User schema
│   │   └── Order.js             # Order schema
│   ├── routes/
│   │   ├── productRoutes.js     # Product API routes
│   │   ├── userRoutes.js        # User API routes
│   │   └── orderRoutes.js       # Order API routes
│   └── index.js                 # Main application file
├── .env                         # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository or navigate to the Backend directory**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   The `.env` file should already exist with default values:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/surya-enterprises
   NODE_ENV=development
   ```
   
   Update these values as needed for your environment.

4. **Ensure MongoDB is running**
   
   Start MongoDB on your local machine or update the `MONGODB_URI` in `.env` to point to your MongoDB instance (e.g., MongoDB Atlas).

## Running the Application

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## API Endpoints

### Products

- **GET** `/api/products` - Get all products
- **GET** `/api/products/:id` - Get a single product by ID
- **POST** `/api/products` - Create a new product
- **PUT** `/api/products/:id` - Update a product
- **DELETE** `/api/products/:id` - Delete a product

**Example Product JSON:**
```json
{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99,
  "category": "Electronics",
  "stock": 50,
  "imageUrl": "https://example.com/laptop.jpg"
}
```

### Users

- **POST** `/api/users` - Create a new user
- **GET** `/api/users` - Get all users
- **GET** `/api/users/:id` - Get a single user by ID

**Example User JSON:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "phone": "1234567890",
  "address": {
    "street": "123 Main St",
    "city": "Mumbai",
    "state": "Maharashtra",
    "zipCode": "400001",
    "country": "India"
  }
}
```

### Orders

- **POST** `/api/orders` - Create a new order
- **GET** `/api/orders` - Get all orders
- **GET** `/api/orders/:id` - Get a single order by ID
- **GET** `/api/orders/user/:userId` - Get all orders for a specific user

**Example Order JSON:**
```json
{
  "user": "user_id_here",
  "items": [
    {
      "product": "product_id_here",
      "quantity": 2,
      "price": 999.99
    }
  ],
  "totalAmount": 1999.98,
  "shippingAddress": {
    "street": "123 Main St",
    "city": "Mumbai",
    "state": "Maharashtra",
    "zipCode": "400001",
    "country": "India"
  },
  "paymentMethod": "credit_card"
}
```

## Testing the API

You can test the API using tools like:
- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- [cURL](https://curl.se/)
- [REST Client VSCode Extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

### Example cURL Commands

**Create a Product:**
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop","description":"High-performance laptop","price":999.99,"category":"Electronics","stock":50}'
```

**Get All Products:**
```bash
curl http://localhost:5000/api/products
```

**Create a User:**
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

## Data Models

### Product Schema
- `name` (String, required)
- `description` (String, required)
- `price` (Number, required)
- `category` (String, required)
- `stock` (Number, default: 0)
- `imageUrl` (String)
- `isActive` (Boolean, default: true)
- `timestamps` (createdAt, updatedAt)

### User Schema
- `name` (String, required)
- `email` (String, required, unique)
- `password` (String, required)
- `phone` (String)
- `address` (Object: street, city, state, zipCode, country)
- `role` (String: 'customer' or 'admin', default: 'customer')
- `isActive` (Boolean, default: true)
- `timestamps` (createdAt, updatedAt)

### Order Schema
- `user` (ObjectId, ref: User, required)
- `items` (Array of objects with product, quantity, price)
- `totalAmount` (Number, required)
- `status` (String: pending/processing/shipped/delivered/cancelled)
- `shippingAddress` (Object: street, city, state, zipCode, country)
- `paymentMethod` (String: credit_card/debit_card/paypal/cash_on_delivery)
- `paymentStatus` (String: pending/completed/failed)
- `timestamps` (createdAt, updatedAt)

## Error Handling

All endpoints return standardized JSON responses:

**Success Response:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

## Future Enhancements

- Authentication & Authorization (JWT)
- Password hashing (bcrypt)
- Input validation middleware
- Pagination for list endpoints
- Search and filtering
- Rate limiting
- API documentation (Swagger/OpenAPI)
- Unit and integration tests
- Image upload functionality
- Email notifications

## License

ISC

## Support

For issues or questions, please contact Surya Enterprises support team.
