import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

class Quiz extends Model { }

Quiz.init(
    {
        quiz_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        instructor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        topic_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sub_topic_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, Infinity],
            },
        },
        description: {
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
        modelName: "quiz",
        underscored: true,
        timestamps: false,
    }
);
