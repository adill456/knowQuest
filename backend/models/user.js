import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, Infinity],
            },
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, Infinity],
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'Invalid email format',
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [11, 12],
            },
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user',
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        verified_at: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        modelName: 'user',
        timestamps: false,
    }
);

export { User };
