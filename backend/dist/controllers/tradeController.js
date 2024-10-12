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
exports.addTrade = exports.getTrades = void 0;
const Trade_1 = __importDefault(require("../models/Trade"));
// Get Trades
const getTrades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trades = yield Trade_1.default.find({ user: req.userId }).sort({ timestamp: -1 });
        res.json(trades);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getTrades = getTrades;
// Add Trade
const addTrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { symbol, quantity, price, type } = req.body;
    try {
        const newTrade = new Trade_1.default({
            user: req.userId,
            symbol,
            quantity,
            price,
            type,
            timestamp: new Date(),
        });
        yield newTrade.save();
        res.status(201).json(newTrade);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.addTrade = addTrade;
