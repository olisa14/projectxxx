"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/tradeRoutes.ts
const express_1 = __importDefault(require("express"));
const tradeController_1 = require("../controllers/tradeController");
const authenticate_1 = require("../services/authenticate");
const router = express_1.default.Router();
// Get all trades for user
router.get('/', authenticate_1.authenticate, tradeController_1.getTrades);
// Add a new trade
router.post('/', authenticate_1.authenticate, tradeController_1.addTrade);
exports.default = router;
