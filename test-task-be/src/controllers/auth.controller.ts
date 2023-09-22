import {Request, Response} from 'express';
import config from '../config/auth.config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from "../models/users.model";

export const signup = (req: Request, res: Response) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 8),
    })
        .then((user: any) => {
            console.log(user)
        })
        .catch((err: any) => {
            res.status(500).send({message: err.message});
        });
};

export const signin = (req: Request, res: Response) => {
    User.findOne({
        where: {
            username: req.body.username,
        },
    })
        .then((user: any) => {
            if (!user) {
                return res.status(404).send({message: 'User Not found.'});
            }

            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: 'Invalid Password!',
                });
            }

            const token = jwt.sign({id: user.id}, config.secret, {
                algorithm: 'HS256',
                expiresIn: 86400,
            });

            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                accessToken: token,
            });
        })
        .catch((err: any) => {
            res.status(500).send({message: err.message});
        });
};