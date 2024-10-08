import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Transaction from '../models/Transaction';

const router = Router();

// Middleware to authenticate
const authenticate = (req: Request, res: Response, next: Function) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
        if (err) return res.status(403).json({ error: 'Forbidden' });
        (req as any).userId = decoded.userId;
        next();
    });
};

// Get User Transactions
router.get('/', authenticate, async (req: Request, res: Response) => {
    try {
        const transactions = await Transaction.find({ userId: (req as any).userId });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching transactions' });
    }
});

export default router;
