import { CustomRequest, CustomResponse } from '../types/express';
import Trade, { ITrade } from '../models/Trade';

// Get Trades
export const getTrades = async (req: CustomRequest, res: CustomResponse) => {
    try {
        const trades: ITrade[] = await Trade.find({ user: req.userId }).sort({ timestamp: -1 });
        res.json(trades);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Add Trade
export const addTrade = async (req: CustomRequest, res: CustomResponse) => {
    const { symbol, quantity, price, type } = req.body;

    try {
        const newTrade: ITrade = new Trade({
            user: req.userId,
            symbol,
            quantity,
            price,
            type,
            timestamp: new Date(),
        });

        await newTrade.save();
        res.status(201).json(newTrade);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error' });
    }
};
