import { Model } from "sequelize";

import { sequelize } from "../config/database";

class SubTopic extends Model { }

SubTopic.init({
    sub_topic_id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    sub_topic_name: {
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
}, {
    sequelize,
    modelName: "sub_topic",
    underscored: true,
    timestamps: false,
})

export { SubTopic };
