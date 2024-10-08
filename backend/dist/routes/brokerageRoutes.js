"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const User_1 = __importDefault(require("../models/User"));
const authenticate_1 = require("../services/authenticate");
const router = (0, express_1.Router)();
// Connect Brokerage Account
router.post('/connect', authenticate_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { brokerageDetails } = req.body;
    try {
        // Integrate with snapTrade API to connect brokerage account
        const response = yield axios_1.default.post('https://api.snaptrade.com/connect', brokerageDetails, {
            headers: { Authorization: `Bearer ${process.env.SNAPTRADE_API_KEY}` }
        });
        const user = yield User_1.default.findById(req.userId);
        if (!user)
            return res.status(404).json({ error: 'User not found' });
        user.brokerageAccountId = response.data.accountId;
        yield user.save();
        res.json({ message: 'Brokerage account connected', accountId: response.data.accountId });
    }
    catch (error) {
        res.status(500).json({ error: 'Error connecting brokerage account' });
    }
}));
exports.default = router;
