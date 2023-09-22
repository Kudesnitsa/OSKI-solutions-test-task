import {
    Model,
    DataTypes,
    Association,
    Sequelize,
    BelongsToManyAddAssociationMixin,
    HasManyAddAssociationMixin,
} from 'sequelize';
import Users from "./users.model";
import Tests from "./tests.model";

class UserTest extends Model {
    public score!: number;

    public addUser!: BelongsToManyAddAssociationMixin<Users, number>
    public addTest!: HasManyAddAssociationMixin<Tests, number>

    public static initialize(sequelize: Sequelize) {
        this.init({
                score: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                },
            },
            {
                sequelize,
                modelName: 'userTest',
                tableName: 'user_test',
            })
    }
}

export default UserTest;