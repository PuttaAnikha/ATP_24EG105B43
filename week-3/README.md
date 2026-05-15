# Week 3: Backend with Database

## Project Description

This week introduces database integration with MongoDB and authentication. The backend application provides RESTful APIs for user management and product operations, implementing secure authentication with JWT tokens and password hashing.

## Features and Functionalities

- User registration and login with JWT authentication
- Password hashing using bcrypt
- Product CRUD operations
- MongoDB database integration with Mongoose
- Middleware for token verification
- Error handling and validation
- Cookie-based session management

## Technologies Used

- **Node.js**: Server runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **JWT (jsonwebtoken)**: Token-based authentication
- **bcrypt**: Password encryption
- **cookie-parser**: HTTP cookie handling

## Folder Structure Explanation

```
week-3/
└── backend_db/
    ├── server.js                # Main Express server
    ├── package.json             # Project dependencies
    ├── APIs/                    # API route handlers
    │   ├── productAPI.js        # Product CRUD endpoints
    │   └── userAPI.js           # User management endpoints
    ├── auth/                    # Authentication logic
    │   └── auth.js              # JWT and bcrypt utilities
    ├── middlewares/             # Custom middleware
    │   └── verifyToken.js       # JWT token verification
    ├── models/                  # Database schemas
    │   ├── productModel.js      # Product data model
    │   └── userModel.js         # User data model
    ├── request.http             # HTTP test requests
    └── README.md                # Backend documentation
```

### Module Details

- **server.js**: Central server file handling DB connection, routing, and error middleware
- **APIs/**: RESTful endpoints for business logic
- **auth/**: Security-related functions
- **middlewares/**: Request processing middleware
- **models/**: Data validation and schema definitions

## Prerequisites Required

- Node.js and npm
- MongoDB installed and running
- Postman or similar for API testing

## Installation Steps

1. Install dependencies:
   ```bash
   cd week-3/backend_db
   npm install
   ```

2. Ensure MongoDB is running on default port (27017)

## Steps to Run the Project Locally

1. Start the server:
   ```bash
   node server.js
   ```

2. Server runs on http://localhost:4000

3. Test APIs using request.http file or Postman

## Environment Variables Setup

Create a `.env` file in backend_db/:

```env
DB_URL=mongodb://localhost:27017/your-database-name
JWT_SECRET=your-secret-key-here
```

## API Endpoints Explanation

### User APIs (`/user-api`)
- `POST /register` - Register new user
- `POST /login` - User login with JWT
- `GET /profile` - Get user profile (requires auth)
- `PUT /update` - Update user details

### Product APIs (`/product-api`)
- `GET /` - Get all products
- `POST /` - Create new product
- `PUT /:id` - Update product by ID
- `DELETE /:id` - Delete product by ID

## Frontend Pages/Components Description

Not applicable (backend-only application).


### User Collection Schema
```javascript
{
  userName: String (required, 4-6 chars),
  password: String (hashed, required),
  email: String (required, unique),
  age: Number,
  timestamps: true
}
```

### Product Collection Schema
```javascript
{
  name: String,
  price: Number,
  category: String,
  description: String,
  // Additional fields as needed
}
```

## Authentication/Authorization Flow

1. User registers with credentials
2. Password hashed with bcrypt before storage
3. Login validates credentials and issues JWT token
4. Protected routes verify JWT token via middleware
5. Token contains user ID for authorization


