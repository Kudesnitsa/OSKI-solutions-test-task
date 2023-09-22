import {Request, Response, NextFunction} from 'express';
import User from "../models/users.model";

export const checkDuplicateUsernameOrEmail = (req: Request, res: Response, next: NextFunction) => {
    // Check for duplicate username
    User.findOne({
        where: {
            username: req.body.username,
        },
    }).then((usernameUser: any) => {
        if (usernameUser) {
            res.status(400).send({
                message: 'Failed! Username is already in use!',
            });
            return;
        }

        // Check for duplicate email
        User.findOne({
            where: {
                email: req.body.email,
            },
        }).then((emailUser: any) => {
            if (emailUser) {
                res.status(400).send({
                    message: 'Failed! Email is already in use!',
                });
                return;
            }

            next();
        });
    });
};

export const verifySignUp = {
    checkDuplicateUsernameOrEmail,
};

export default verifySignUp;