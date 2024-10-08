import { Router } from 'express';
import userRoutes from './userRoutes';
import brokerageRoutes from './brokerageRoutes';
import insuranceRoutes from './insuranceRoutes';
import transactionRoutes from './transactionRoutes';
import tradeRoutes from './tradeRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use('/brokerage', brokerageRoutes);
router.use('/insurance', insuranceRoutes);
router.use('/transactions', transactionRoutes);
router.use('/trades', tradeRoutes);

export default router;
