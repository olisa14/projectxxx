"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    brokerageAccountId: { type: String, required: true },
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
exports.default = (0, mongoose_1.model)('User', UserSchema);
