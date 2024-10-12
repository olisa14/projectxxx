"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/tradeRoutes.ts
const express_1 = __importDefault(require("express"));
const tradeController_1 = require("../controllers/tradeController");
const cognitoAuth_1 = require("../services/cognitoAuth"); // New import
const router = express_1.default.Router();
// Get all trades for user
router.get('/', cognitoAuth_1.cognitoAuth, tradeController_1.getTrades);
// Add a new trade
router.post('/', cognitoAuth_1.cognitoAuth, tradeController_1.addTrade);
exports.default = router;
