import {
    Model,
    DataTypes,
    Sequelize
} from 'sequelize';


class Answers extends Model {
    public id!: number;
    public text!: string;
    public isCorrect!: boolean;

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
                isCorrect: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'answers',
                tableName: 'answers',
            })
    }
}

export default Answers;