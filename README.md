project: MERN Backend API - JWT Authentication
repo: https://github.com/MohamedAmineGharsalli/codveda-internship-backend.git
description: >
  This is the backend API service for the MERN Authentication App, built during my Full Stack Development Internship at Codveda Technologies.

stack:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT (jsonwebtoken)
  - bcryptjs
  - dotenv

features:
  - User Registration & Login with JWT
  - Secure Password Hashing (bcrypt)
  - Role-based Authorization (User/Admin)
  - Protected Routes using Middleware
  - MongoDB Validation & Indexes
  - Clean MVC Backend Architecture

project_structure:
  backend/
  ├── .env
  ├── index.js
  ├── config/
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  └── package.json

backend_setup:
  steps:
    - git [clone https://github.com/MohamedAmineGharsalli/codveda-internship-backend.git]
    - cd backend-repo
    - npm install
    - Create a `.env` file:
        - PORT=5000
        - MONGO_URI=mongodb://localhost:27017/codveda
        - JWT_SECRET=codveda_internship_secret_key_2024
    - npm run dev

api_endpoints:
  auth:
    - POST /api/auth/register
    - POST /api/auth/login
  users (Protected Admin Only):
    - GET /api/users
    - POST /api/users
    - PUT /api/users/:id
    - DELETE /api/users/:id



