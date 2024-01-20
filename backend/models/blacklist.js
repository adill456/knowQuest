import { DataTypes, Model } from "sequelize";

import { sequelize } from "../config/database.js";


class BlacklistToken extends Model { }

BlacklistToken.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expired_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "BlacklistToken",
        tableName: "blacklisttokens",
        timestamps: false,
    }
);

export { BlacklistToken };
