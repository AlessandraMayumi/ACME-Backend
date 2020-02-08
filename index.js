const express = require('express')
const mongoose = require('mongoose')
const clientRoutes = require('./src/routes/crm/clientRoutes')
const serviceRoutes = require('./src/routes/crm/serviceRoutes')
const paidRoutes = require('./src/routes/financial/paidRoutes')

const app = express();
const PORT = 5000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ACMEdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/', clientRoutes);
app.use('/', serviceRoutes);
app.use('/', paidRoutes);

// serving static files
app.use(express.static('public'));
//app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) =>
    res.send(`Node and Express Server running on port ${PORT}`)
);

app.listen(PORT,() =>
    console.log(`Your server is running on port ${PORT}`)
);