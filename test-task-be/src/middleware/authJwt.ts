import { Request, Response, NextFunction } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import config from '../config/auth.config';

export  const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({
            message: 'No token provided!',
        });
    }

    jwt.verify(token as string, config.secret, (err: JsonWebTokenError | null, decoded: any) => {
        if (err) {
            return res.status(401).send({
                message: 'Unauthorized!',
            });
        }
        (req as any).user = (decoded as any);
        next();
    });
};

export const authJwt = {
    verifyToken,
};

export default authJwt;