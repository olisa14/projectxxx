"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
// import { authenticate } from '../services/authenticate';
const cognitoAuth_1 = require("../services/cognitoAuth"); // New import
const router = express_1.default.Router();
// Register
router.post('/register', userController_1.registerUser);
// Login
router.post('/login', userController_1.loginUser);
// Get User Profile
router.get('/profile', cognitoAuth_1.cognitoAuth, userController_1.getUserProfile);
exports.default = router;
