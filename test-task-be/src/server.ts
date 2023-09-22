import router from "./routes";
import {Answers, Database, Questions, Tests, Users} from "./models";
import bcrypt from "bcryptjs";
import {DataTypes} from "sequelize";


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = Number(process.env.APP_PORT) || 3000;

const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(router);
Database.sync({force: true}).then(
    () => (initial())
)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

async function initial() {
    const user = await Users.create({
        email: 'email@gmail.com',
        firstName: 'Test',
        lastName: 'First',
        username: 'test.first',
        password: bcrypt.hashSync('test.second1!', 8)
    })

    const test = await Tests.create({
        name: "Demo test",
        description: "A DEMO Test - Sample form is submitted by a new customer in order to receive a demonstration of a product. No coding!"
    })

    const questions = await Questions.create({
        text: "Is first question?",
    })

    const answers1 = await Answers.create({
        text: "Yes",
        isCorrect: true
    })

    const answers2 = await Answers.create({
        text: "Not",
        isCorrect: false
    })

    await test.addQuestion(questions);
    await user.addTest(test, { through: { score: null } });
    await questions.addAnswer(answers1)
    await questions.addAnswer(answers2)

    // await Questions.create({
    //     text: "Is this first questions?",
    //     testId: 1,
    // })
    //
    // await Questions.create({
    //     text: "Is this second questions?",
    //     testId: 1,
    // })
    //
    //
    //
    // const user = await Users.create({
    //     username: "test.second",
    //     email: "test.second@test.co",
    //     firstName: "Test",
    //     lastName: "Second",
    //     password: bcrypt.hashSync("test.second22!", 8),
    // });
    // await Answers.create({
    //     text: "Yes",
    //     questionsId: '1',
    //     isCorrect : true,
    // })
    //
    // await Answers.create({
    //     text: "Not",
    //     questionsId: '1',
    //     isCorrect : false,
    // })
    //
    // await Answers.create({
    //     text: "Yes",
    //     questionsId: '2',
    //     isCorrect : true,
    // })
    //
    // await Answers.create({
    //     text: "Not",
    //     questionsId: '2',
    //     isCorrect : false,
    // })

}