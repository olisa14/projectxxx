import { Request, Response } from 'express';

export interface CustomRequest extends Request {
    userId?: any;
    user?: any;
}
export interface CustomResponse extends Response {
    userId?: any;
    user?: any;
}