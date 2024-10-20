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
exports.cognitoAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwks_rsa_1 = __importDefault(require("jwks-rsa"));
// Replace with your Cognito User Pool ID and region
const COGNITO_USER_POOL_ID = process.env.COGNITO_USER_POOL_ID || 'us-east-1_OXn7jTWse';
const COGNITO_REGION = process.env.COGNITO_REGION || 'us-east-1';
const client = (0, jwks_rsa_1.default)({
    jwksUri: `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}/.well-known/jwks.json`,
});
const getKey = (header, callback) => {
    client.getSigningKey(header.kid, (err, key) => {
        if (err) {
            callback(err, null);
        }
        else {
            const signingKey = key === null || key === void 0 ? void 0 : key.getPublicKey();
            callback(null, signingKey);
        }
    });
};
const cognitoAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or malformed' });
    }
    const token = authHeader.split(' ')[1];
    try {
        jsonwebtoken_1.default.verify(token, getKey, {
            algorithms: ['RS256'],
            issuer: `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}`,
        }, (err, decoded) => {
            if (err) {
                console.error('Token verification failed:', err);
                return res.status(401).json({ message: 'Invalid or expired token' });
            }
            req.user = decoded;
            next();
        });
    }
    catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
});
exports.cognitoAuth = cognitoAuth;
