import {Request, Response} from 'express';
import Tests from "../models/tests.model";
import Questions from "../models/questions.model";
import Answers from "../models/answers.model";
import UserTest from "../models/userTest.model";
import {Users} from "../models";

export const getTestList = async (req: any, res: Response) => {
    try {
        const userId = req.user.id;
        Users.findByPk(userId, {
            include: {
                model: Tests,
                as: 'tests',
            },
        })
            .then((user: any) => {
                if (!user) {
                    return res.status(404).send({message: 'User not found.'});
                }

                res.status(200).send(user.tests);
            })
            .catch((err) => {
                res.status(500).send({message: err.message});
            });
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};


export const getTestItem = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const test = await Tests.findOne({
            where: {id},
            include: [
                {
                    model: Questions,
                    include: [
                        {
                            model: Answers,
                            attributes: ['id', 'text'],
                        }
                    ]
                }
            ],
        });
        if (!test) {
            res.status(404).json({message: 'Test not found'});
        } else {
            res.status(200).json(test);
        }
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

export const passTest = async (req: any, res: Response) => {
    try {
        const userId = req.userId;
        const {testId, score} = req.body;


        const userTest = await UserTest.findOne({
            where: {
                userId,
                testId
            },
        });

        if (!userTest) {
            return res.status(404).json({message: 'UserTest not found'});
        }

        if (userTest.score) {
            return res.status(401).json({message: 'Test was already passed'});
        }

        userTest.score = score;
        await userTest.save();

        return res.status(200).json({message: 'UserTest updated successfully', userTest});
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};