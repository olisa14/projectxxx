import { Router, Request, Response } from 'express';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { authenticate } from '../services/authenticate';
const router = Router();



// Connect Brokerage Account
router.post('/connect', authenticate, async (req: Request, res: Response) => {
    const { brokerageDetails } = req.body;
    try {
        // Integrate with snapTrade API to connect brokerage account
        const response = await axios.post('https://api.snaptrade.com/connect', brokerageDetails,
            {
            headers: { Authorization: `Bearer ${process.env.SNAPTRADE_API_KEY}` }
        });

        const user = await User.findById((req as any).userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        user.brokerageAccountId = response.data.accountId;
        await user.save();

        res.json({ message: 'Brokerage account connected', accountId: response.data.accountId });
    } catch (error) {
        res.status(500).json({ error: 'Error connecting brokerage account' });
    }
});

export default router;
