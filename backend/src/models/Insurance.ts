import { Schema, model, Document } from 'mongoose';

export interface IInsurance extends Document {
    userId: Schema.Types.ObjectId;
    type: 'daily' | 'monthly';
    premiumAmount: number;
    active: boolean;
    startDate: Date;
    endDate: Date;
}

const InsuranceSchema = new Schema<IInsurance>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['daily', 'monthly'], required: true },
    premiumAmount: { type: Number, required: true },
    active: { type: Boolean, default: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date }
});

export default model<IInsurance>('Insurance', InsuranceSchema);
