"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InsuranceSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['daily', 'monthly'], required: true },
    premiumAmount: { type: Number, required: true },
    active: { type: Boolean, default: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date }
});
exports.default = (0, mongoose_1.model)('Insurance', InsuranceSchema);
