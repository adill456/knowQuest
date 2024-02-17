import express from 'express';

import { sequelize } from './config/database.js';
import { mainRouter } from './routes/main.js';

import cors from 'cors';


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
    AllowedHeaders: 'Content-Type, Authorization'

}));

app.use('/api', mainRouter);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(5000, () => {
        console.log('Server is running...');
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
})