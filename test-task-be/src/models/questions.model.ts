import {
    Model,
    DataTypes,
    Association,
    HasManyAddAssociationMixin,
    HasManyCreateAssociationMixin,
    HasManyGetAssociationsMixin,
    HasManySetAssociationsMixin,
    HasManyAddAssociationsMixin,
    BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, Sequelize
} from 'sequelize';
import Tests from "./tests.model";
import Answers from "./answers.model";

class Questions extends Model {
    public id!: number;
    public text!: string;

    public addAnswer!: HasManyAddAssociationMixin<Answers, number>
    public addAnswers!: HasManyAddAssociationsMixin<Answers, number>
    public createAnswers!: HasManyCreateAssociationMixin<Answers>
    public getAnswers!: HasManyGetAssociationsMixin<Answers>
    public setAnswers!: HasManySetAssociationsMixin<Answers, number>

    public createTest!: BelongsToCreateAssociationMixin<Tests>
    public getTest!: BelongsToGetAssociationMixin<Tests>
    public setTest!: BelongsToSetAssociationMixin<Tests, number>


    public static initialize(sequelize: Sequelize) {
        this.init({
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                text: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'questions',
                tableName: 'questions',
            })
    }
}

export default Questions;