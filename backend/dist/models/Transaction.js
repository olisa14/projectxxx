"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TransactionSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    symbol: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    type: { type: String, enum: ['buy', 'sell'], required: true },
    date: { type: Date, default: Date.now }
});
exports.default = (0, mongoose_1.model)('Transaction', TransactionSchema);
