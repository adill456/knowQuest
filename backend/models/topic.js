import { Model } from "sequelize";

import { sequelize } from "../config/database.js";

class Topic extends Model { }

Topic.init(
    {
        topic_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        topic_name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [3, Infinity],
            },
        },
        created_at: {
            type: DataType.DATE,
            allowNull: false,
            defaultValue: DataType.NOW,
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


