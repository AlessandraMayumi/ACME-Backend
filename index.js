const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const clientRoutes = require('./src/routes/crm/clientRoutes')
const serviceRoutes = require('./src/routes/crm/serviceRoutes')
const paidRoutes = require('./src/routes/financial/paidRoutes')

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

//app.get('/', (req, res) => res.render('pages/index'))
app.get('/', (req,res) =>
    res.send(`Node and Express Server running on port ${PORT}`)
);

app.use('/', clientRoutes);
app.use('/', serviceRoutes);
app.use('/', paidRoutes);

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ACMEdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
