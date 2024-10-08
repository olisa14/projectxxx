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
exports.placeTrade = exports.getUserPortfolio = void 0;
const axios_1 = __importDefault(require("axios"));
const SNAPTRADE_BASE_URL = 'https://api.snaptrade.com';
const getUserPortfolio = (accountId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${SNAPTRADE_BASE_URL}/accounts/${accountId}/portfolio`, {
        headers: { Authorization: `Bearer ${process.env.SNAPTRADE_API_KEY}` }
    });
    return response.data;
});
exports.getUserPortfolio = getUserPortfolio;
const placeTrade = (accountId, tradeDetails) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(`${SNAPTRADE_BASE_URL}/accounts/${accountId}/trades`, tradeDetails, {
        headers: { Authorization: `Bearer ${process.env.SNAPTRADE_API_KEY}` }
    });
    return response.data;
});
exports.placeTrade = placeTrade;
