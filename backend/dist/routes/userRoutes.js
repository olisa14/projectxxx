"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authenticate_1 = require("../services/authenticate");
const router = express_1.default.Router();
// Register
router.post('/register', userController_1.registerUser);
// Login
router.post('/login', userController_1.loginUser);
// Get User Profile
router.get('/profile', authenticate_1.authenticate, userController_1.getUserProfile);
exports.default = router;
