import { Model } from "sequelize";

import { sequelize } from "../config/database.js";

class Question extends Model { }

Question.init({
    question_id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    quiz_id: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    topic_id: {
        type: DataType.INTEGER,
        allowNull: false,

    },
    sub_topic_id: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    question_text: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [3, Infinity],
        },
    },
    choice_1: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [3, Infinity],
        },
    },
    choice_2: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [3, Infinity],
        },
    },
    choice_3: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [3, Infinity],
        },
    },
    choice_4: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [3, Infinity],
        },
    },
    correct_choice: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [3, Infinity],
        },
    },
}, {
    sequelize,
    modelName: "question",
    underscored: true,
    timestamps: false,
})

export { Question };
