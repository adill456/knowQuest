import { DataTypes, Model } from "sequelize";

import { sequelize } from "../config/database.js";

class SubTopic extends Model { }

SubTopic.init({
    subtopic_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    subtopic_name: {
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
}, {
    sequelize,
    modelName: "sub_topic",
    timestamps: false,
})

export { SubTopic };
