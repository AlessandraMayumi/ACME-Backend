const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReceivedSchema = new Schema({
    amount: {
        type: Number,
        required: 'Enter the amount of the received payment'
    },
    description: {
        type: String 
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = ReceivedSchema;