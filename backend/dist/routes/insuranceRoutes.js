"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/insuranceRoutes.ts
const express_1 = __importDefault(require("express"));
const insuranceController_1 = require("../controllers/insuranceController");
const cognitoAuth_1 = require("../services/cognitoAuth"); // New import
const router = express_1.default.Router();
// Buy insurance
router.post('/buy', cognitoAuth_1.cognitoAuth, insuranceController_1.buyInsurance);
// Get insurance details
router.get('/', cognitoAuth_1.cognitoAuth, insuranceController_1.getInsurance);
exports.default = router;
