import { CustomRequest, CustomResponse } from '../types/express';
import Insurance, { IInsurance } from '../models/Insurance';
import User from '../models/User';

// Buy Insurance
export const buyInsurance = async (req: CustomRequest, res: CustomResponse) => {
    const { premium, coverageAmount, duration } = req.body; // duration in days or months

    try {
        // Calculate end date
        let endDate = new Date();
        if (duration === 'daily') {
            endDate.setDate(endDate.getDate() + 1);
        } else if (duration === 'monthly') {
            endDate.setMonth(endDate.getMonth() + 1);
        } else {
            return res.status(400).json({ message: 'Invalid duration' });
        }

        // Create insurance
        const newInsurance: IInsurance = new Insurance({
            user: req.userId,
            premium,
            coverageAmount,
            startDate: new Date(),
            endDate,
            active: true,
        });

        await newInsurance.save();

        // Update user's insurance premium
        await User.findByIdAndUpdate(req.userId, { insurancePremium: premium });

        res.status(201).json(newInsurance);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get Insurance Details
export const getInsurance = async (req: CustomRequest, res: CustomResponse) => {
    try {
        const insurance: IInsurance | null = await Insurance.findOne({ user: req.userId, active: true });
        if (!insurance) return res.status(404).json({ message: 'No active insurance found' });

        res.json(insurance);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
