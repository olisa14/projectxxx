import express, { Router, Request, Response } from 'express';
import Stripe from 'stripe';
import Insurance from '../models/Insurance';

const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20'
});

// Stripe webhook endpoint
router.post('/webhook', express.raw({ type: 'application/json' }), async (req: Request, res: Response) => {
    const sig = req.headers['stripe-signature'] as string;
    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET as string);
    } catch (err: any) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        // Find and activate insurance
        const insurance = await Insurance.findOne({ 'paymentIntent.id': paymentIntent.id });
        if (insurance) {
            insurance.active = true;
            await insurance.save();
        }
    }

    res.json({ received: true });
});

export default router;
