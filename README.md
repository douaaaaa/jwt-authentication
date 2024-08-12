# JWT Authentication with Node.js, Express, and MongoDB

### Overview
This project provides a robust authentication system using JSON Web Tokens (JWT) with Node.js, Express, and MongoDB. It allows users to register, log in, log out, and manage their profiles securely.

### Features
- User Registration: Create new user accounts.
- User Login: Authenticate users and issue JWTs.
- User Logout: Invalidate the user's session by clearing the JWT.
- Profile Management: Retrieve and update user profile information.

### API Endpoints:
- POST /api/user: Register a new user.
- POST /api/user/log-in: Authenticate and log in a user.
- POST /api/user/log-out: End the user session and log out.
- GET /api/user/profile: Retrieve the current user’s profile data.
- PUT /api/user/profile: Update the user’s profile information.

### Installation
1. Clone the Repository:
```
  git clone https://github.com/douaaaaa/jwt-authentication
```
2. Navigate to the Project Directory:
```
  cd jwt-authentication
```
3. Install Dependencies:
```
  npm install
```
4. Set Up Environment Variables:
```
  MONGO = <your_mongodb_uri>
  PORT = <port>
  JWT_SECRET = <your_jwt_secret>
```
5. Start the Server:
```
  npm run dev
```

### Dependencies
- bcryptjs
- cookie-parser
- dotenv
- express
- express-async-handler
- jsonwebtoken
- mongoose



