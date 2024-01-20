import { Sequelize } from 'sequelize';

import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DB_URL;

const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export { sequelize };

