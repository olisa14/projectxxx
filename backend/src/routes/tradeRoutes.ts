// src/routes/tradeRoutes.ts
import express from 'express';
import { getTrades, addTrade } from '../controllers/tradeController';
import { cognitoAuth as authenticate } from '../services/cognitoAuth'; // New import

const router = express.Router();

// Get all trades for user
router.get('/', authenticate, getTrades);

// Add a new trade
router.post('/', authenticate, addTrade);

export default router;
