import { DataTypes, Model } from "sequelize";

import { sequelize } from "../config/database.js";

class Topic extends Model { }

Topic.init(
    {
        topic_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        topic_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, Infinity],
            },
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: "topic",
        underscored: true,
        timestamps: false,
    }
)

export { Topic };


