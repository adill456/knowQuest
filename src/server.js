import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import exphbs from 'express-handlebars';

const app = express();

app.use(cors());
app.use(bodyParser.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine({ defaultLayout: false, partialsDir: join(__dirname, 'views/partials') }));
app.set('view engine', 'handlebars');
app.set('views', join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', {
    title: 'My Handlebars-Express App',
    message: 'Hello, world!'
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
