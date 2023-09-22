import {
    Model,
    Sequelize,
    DataTypes,
    Association,
    BelongsToManyAddAssociationMixin,
    BelongsToManyAddAssociationsMixin,
    BelongsToManyCountAssociationsMixin,
    BelongsToManyCreateAssociationMixin,
    BelongsToManyGetAssociationsMixin,
    BelongsToManyHasAssociationMixin,
    BelongsToManyHasAssociationsMixin,
    BelongsToManyRemoveAssociationMixin,
    BelongsToManyRemoveAssociationsMixin,
    BelongsToManySetAssociationsMixin
} from 'sequelize';

import Tests from "./tests.model";

class Users extends Model {
    public id!: number;
    public email!: string;
    public firstName!: string;
    public lastName!: string;
    public username!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public addTest!: BelongsToManyAddAssociationMixin<Tests, number>
    public addTests!: BelongsToManyAddAssociationsMixin<Tests, number>
    public countTests!: BelongsToManyCountAssociationsMixin
    public createTest!: BelongsToManyCreateAssociationMixin<Tests>
    public getTests!: BelongsToManyGetAssociationsMixin<Tests>
    public hasTest!: BelongsToManyHasAssociationMixin<Tests, number>
    public hasTests!: BelongsToManyHasAssociationsMixin<Tests, number>
    public removeTest!: BelongsToManyRemoveAssociationMixin<Tests, number>
    public removeTests!: BelongsToManyRemoveAssociationsMixin<Tests, number>
    public setTests!: BelongsToManySetAssociationsMixin<Tests, number>

    public static initialize(sequelize: Sequelize) {
        this.init({
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                username: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false,
                },
                firstName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                lastName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'users',
                tableName: 'users',
            })
    }
}

export default Users;