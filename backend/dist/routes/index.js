"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
const brokerageRoutes_1 = __importDefault(require("./brokerageRoutes"));
const insuranceRoutes_1 = __importDefault(require("./insuranceRoutes"));
const transactionRoutes_1 = __importDefault(require("./transactionRoutes"));
const tradeRoutes_1 = __importDefault(require("./tradeRoutes"));
const router = (0, express_1.Router)();
router.use('/users', userRoutes_1.default);
router.use('/brokerage', brokerageRoutes_1.default);
router.use('/insurance', insuranceRoutes_1.default);
router.use('/transactions', transactionRoutes_1.default);
router.use('/trades', tradeRoutes_1.default);
exports.default = router;
