const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const clientRoutes = require('./src/routes/crm/clientRoutes');
const serviceRoutes = require('./src/routes/crm/serviceRoutes');
const paidRoutes = require('./src/routes/financial/paidRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// mongoose connection
const uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/ACMEdb';
mongoose.Promise = global.Promise;
mongoose.connect(uristring, {   
    useNewUrlParser: true,
    useUnifiedTopology: true},
    function (err, res) {
        if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
        }
        console.log ('Succeeded connected to: ' + uristring);
      },
    );
// body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.get('/', (req, res) => res.render('pages/index'));
app.get('/', (req,res) =>
    res.send(`Node and Express Server running on port ${PORT}`)
);
app.get('/teste', (req,res) =>
    res.send(`teste ${PORT}`)
);

app.use('/', clientRoutes);
app.use('/', serviceRoutes);
app.use('/', paidRoutes);
