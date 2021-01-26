const express = require('express');
const express_handlebars = require('express-handlebars');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

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

app.use(express.json({extended: true}));
app.use(cors());
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/profile', require('./routes/profile.routes'));
app.use('/api/stat', require('./routes/stat.routes'));

const PORT = config.get('port') || 5000;

async function start() {
    try{
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, ()=> console.log(`Server has been started on port ${PORT}`));
    }catch(e){
        console.log(`Server error: ${e.message}`);
        process.exit(1);
    }
}

start();
