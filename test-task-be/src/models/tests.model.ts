import {
    Model,
    DataTypes,
    Association,
    Sequelize,
    BelongsToManyAddAssociationMixin,
    BelongsToManyAddAssociationsMixin,
    BelongsToManyCountAssociationsMixin,
    BelongsToManyCreateAssociationMixin,
    BelongsToManyGetAssociationsMixin,
    BelongsToManyHasAssociationMixin,
    BelongsToManyHasAssociationsMixin,
    BelongsToManyRemoveAssociationMixin,
    BelongsToManyRemoveAssociationsMixin,
    BelongsToManySetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyCreateAssociationMixin,
    HasManyGetAssociationsMixin,
    HasManySetAssociationsMixin
} from 'sequelize';
import Users from "./users.model";
import Questions from "./questions.model";

class Tests extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public addUser!: BelongsToManyAddAssociationMixin<Users, number>
    public addUsers!: BelongsToManyAddAssociationsMixin<Users, number>
    public countUsers!: BelongsToManyCountAssociationsMixin
    public createUser!: BelongsToManyCreateAssociationMixin<Users>
    public getUsers!: BelongsToManyGetAssociationsMixin<Users>
    public hasUser!: BelongsToManyHasAssociationMixin<Users, number>
    public hasUsers!: BelongsToManyHasAssociationsMixin<Users, number>
    public removeUser!: BelongsToManyRemoveAssociationMixin<Users, number>
    public removeUsers!: BelongsToManyRemoveAssociationsMixin<Users, number>
    public setUsers!: BelongsToManySetAssociationsMixin<Users, number>

    public addQuestion!: HasManyAddAssociationMixin<Questions, number>
    public createQuestion!: HasManyCreateAssociationMixin<Questions>
    public getQuestions!: HasManyGetAssociationsMixin<Questions>
    public setQuestions!: HasManySetAssociationsMixin<Questions, number>


    public static initialize(sequelize: Sequelize) {
        this.init({
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'tests',
                tableName: 'tests',
            })
    }
}

export default Tests;