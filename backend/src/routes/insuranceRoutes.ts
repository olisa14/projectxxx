// src/routes/insuranceRoutes.ts
import express from 'express';
import { buyInsurance, getInsurance } from '../controllers/insuranceController';
import { cognitoAuth as authenticate } from '../services/cognitoAuth'; // New import

const router = express.Router();

// Buy insurance
router.post('/buy', authenticate, buyInsurance);

// Get insurance details
router.get('/', authenticate, getInsurance);

export default router;
