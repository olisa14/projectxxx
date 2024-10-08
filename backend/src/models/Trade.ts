// src/models/Trade.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface ITrade extends Document {
    user: mongoose.Types.ObjectId;
    symbol: string;
    quantity: number;
    price: number;
    type: 'buy' | 'sell';
    timestamp: Date;
}

const TradeSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    symbol: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    type: { type: String, enum: ['buy', 'sell'], required: true },
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<ITrade>('Trade', TradeSchema);
