"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/insuranceRoutes.ts
const express_1 = __importDefault(require("express"));
const insuranceController_1 = require("../controllers/insuranceController");
const authenticate_1 = require("../services/authenticate");
const router = express_1.default.Router();
// Buy insurance
router.post('/buy', authenticate_1.authenticate, insuranceController_1.buyInsurance);
// Get insurance details
router.get('/', authenticate_1.authenticate, insuranceController_1.getInsurance);
exports.default = router;
