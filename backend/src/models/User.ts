import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    brokerageAccountId: string;
    insurance: {
        type: 'daily' | 'monthly';
        active: boolean;
        premiumAmount: number;
    };
}

const UserSchema:Schema<IUser> = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    brokerageAccountId: { type: String, required: false },
    insurance: {
        type: {
            type: String,
            enum: ['daily', 'monthly'],
            default: 'daily'
        },
        active: { type: Boolean, default: false },
        premiumAmount: { type: Number, default: 0 }
    }
});

export default model<IUser>('User', UserSchema);
