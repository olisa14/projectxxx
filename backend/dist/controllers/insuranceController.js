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
exports.getInsurance = exports.buyInsurance = void 0;
const Insurance_1 = __importDefault(require("../models/Insurance"));
const User_1 = __importDefault(require("../models/User"));
// Buy Insurance
const buyInsurance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { premium, coverageAmount, duration } = req.body; // duration in days or months
    try {
        // Calculate end date
        let endDate = new Date();
        if (duration === 'daily') {
            endDate.setDate(endDate.getDate() + 1);
        }
        else if (duration === 'monthly') {
            endDate.setMonth(endDate.getMonth() + 1);
        }
        else {
            return res.status(400).json({ message: 'Invalid duration' });
        }
        // Create insurance
        const newInsurance = new Insurance_1.default({
            user: req.userId,
            premium,
            coverageAmount,
            startDate: new Date(),
            endDate,
            active: true,
        });
        yield newInsurance.save();
        // Update user's insurance premium
        yield User_1.default.findByIdAndUpdate(req.userId, { insurancePremium: premium });
        res.status(201).json(newInsurance);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.buyInsurance = buyInsurance;
// Get Insurance Details
const getInsurance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insurance = yield Insurance_1.default.findOne({ user: req.userId, active: true });
        if (!insurance)
            return res.status(404).json({ message: 'No active insurance found' });
        res.json(insurance);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getInsurance = getInsurance;
