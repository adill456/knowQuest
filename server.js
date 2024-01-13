const express = require('express');
const sequelize = require('./config');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(5000, () => {
        console.log('Server is running...');
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
})