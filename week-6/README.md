# Week 6: MERN Stack Applications

## Project Description

This week culminates the learning journey with full-stack MERN (MongoDB, Express, React, Node.js) applications. The projects demonstrate complete web application development with backend APIs, database integration, and modern React frontends.

## Features and Functionalities

- Full-stack employee management system
- React applications with modern hooks
- Context API for state management
- RESTful API development
- MongoDB database operations
- CORS-enabled frontend-backend communication
- Error handling and validation

## Technologies Used

### Backend
- **Node.js**: Server runtime
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM
- **JWT**: Authentication
- **bcrypt**: Password hashing
- **CORS**: Cross-origin handling

### Frontend
- **React**: UI library
- **Vite**: Build tool
- **Context API**: State management
- **React Hooks**: Modern React features

## Folder Structure Explanation

```
week-6/
├── mern_application1/           # Complete MERN App
│   ├── backend_app/             # Express + MongoDB Backend
│   │   ├── server.js            # Main server
│   │   ├── package.json         # Dependencies
│   │   ├── API/                 # API routes
│   │   ├── middlewares/         # Custom middleware
│   │   ├── models/              # Database models
│   │   ├── rqst.http            # Test requests
│   │   └── notes.md             # Backend notes
│   └── frontend/                # React Frontend
│       ├── index.html           # App entry
│       ├── package.json         # Dependencies
│       ├── src/                 # Source code
│       ├── public/              # Assets
│       └── README.md            # Frontend docs
├── react_apllication4_contextProvider/  # React with Context
├── react_application2/          # React App 2
└── react_application3/          # React App 3
```

### Module Details

- **mern_application1**: Full-stack employee management
- **React applications**: Various React projects with different features

## Prerequisites Required

- Node.js and npm
- MongoDB
- Modern browser

## Installation Steps

### Backend
```bash
cd week-6/mern_application1/backend_app
npm install
```

### Frontend
```bash
cd week-6/mern_application1/frontend
npm install
```

## Steps to Run the Project Locally

### Full MERN Application
1. Start MongoDB
2. Backend:
   ```bash
   cd backend_app
   node server.js
   ```
3. Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

### React Applications
```bash
cd react_application2
npm install
npm run dev
```

## Environment Variables Setup

Create `.env` in backend_app/:

```env
PORT=4000
DB_URL=mongodb://localhost:27017/mern-app
JWT_SECRET=your-secret
```

## API Endpoints Explanation

### Employee APIs (`/emp-api`)
- `GET /` - Get all employees
- `POST /` - Create employee
- `PUT /:id` - Update employee
- `DELETE /:id` - Delete employee

## Frontend Pages/Components Description

- **Employee List**: Display all employees
- **Add Employee Form**: Create new employees
- **Edit Employee**: Update employee details
- **Context Providers**: Global state management

## Database Information and Schema Overview

### Employee Collection
```javascript
{
  name: String,
  position: String,
  salary: Number,
  department: String,
  // Timestamps
}
```

## Authentication/Authorization Flow

JWT-based authentication for protected routes.

