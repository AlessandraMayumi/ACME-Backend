const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EmployeesSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        require: 'Enter a last name'
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    position: {
        type:String
    },
    status_employee: {
        type: String,
        default: 'new'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = ClientSchema;