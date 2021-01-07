const express = require('express');
const express_handlebars = require('express-handlebars');
const path = require('path');

const app = express();

const hbs = express_handlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server has been started on port ${PORT}`));