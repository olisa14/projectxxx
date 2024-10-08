import { Schema, model, Document } from 'mongoose';

export interface ITransaction extends Document {
    userId: Schema.Types.ObjectId;
    symbol: string;
    quantity: number;
    price: number;
    type: 'buy' | 'sell';
    date: Date;
}

const TransactionSchema = new Schema<ITransaction>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    symbol: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    type: { type: String, enum: ['buy', 'sell'], required: true },
    date: { type: Date, default: Date.now }
});

export default model<ITransaction>('Transaction', TransactionSchema);
