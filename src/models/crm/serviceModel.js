const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ServiceSchema = new Schema({
    client_id:{
        type: String
    },
    payment_date: {
        type: String,
        default: null
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = ServiceSchema;