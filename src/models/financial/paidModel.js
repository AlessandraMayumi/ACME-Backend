const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaidSchema = new Schema({
    amount: {
        type: Number,
        required: 'Enter the amount of the payment'
    },
    description: {
        type: String 
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = PaidSchema;