const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OnlineStoreSchema = new Schema({
    client_id: {
        type: String
    },
    chart_nonempty: {
        type: String
    },
    checkout_status: {
        type: Boolean,
        default: false
    },
    financial_data_status: {
        type: Boolean,
        default: false
    },
    shop_status: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = ClientSchema;