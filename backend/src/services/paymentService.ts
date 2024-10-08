import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20'
});

export const createPaymentIntent = async (amount: number) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // amount in cents
        currency: 'usd'
    });
    return paymentIntent;
};
