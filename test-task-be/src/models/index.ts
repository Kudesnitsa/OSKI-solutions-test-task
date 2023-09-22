import {Sequelize, Dialect} from 'sequelize';
import dbConfig from "../config/db.config";
import Users from "./users.model";
import Tests from "./tests.model";
import Questions from "./questions.model";
import Answers from "./answers.model";
import UserTest from "./userTest.model";

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect as Dialect,
        port: Number(dbConfig.port),
        logging: false,
    });

let models = [Users, Tests, Questions, Answers, UserTest];
models.forEach(model => model.initialize(sequelize))
Users.belongsToMany(Tests, {through: UserTest, foreignKey: 'userId'});
Tests.belongsToMany(Users, {through: UserTest, foreignKey: 'testId'});
Tests.hasMany(Questions, {foreignKey: 'testId'})
Questions.belongsTo(Tests)
Questions.hasMany(Answers, {foreignKey: 'questionId'})
Answers.belongsTo(Questions)

export {
    sequelize as Database,
    Users, Tests, Questions, Answers, UserTest
}
