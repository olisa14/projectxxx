// src/routes/userRoutes.ts
import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController';
// import { authenticate } from '../services/authenticate';
import { cognitoAuth as authenticate } from '../services/cognitoAuth'; // New import

const router = express.Router();

// Register
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

// Get User Profile
router.get('/profile', authenticate, getUserProfile);

export default router;
