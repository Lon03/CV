"use strict";
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

let schema      = new Schema({
    id: {type: String, required: true}
    , userID: {type: String, required: true}
    , companyName: Schema.Types.Mixed
    , duties: Schema.Types.Mixed
    , position: Schema.Types.Mixed
    , receiptDate: Schema.Types.Mixed
    , expirationDate: Schema.Types.Mixed
});

module.exports = mongoose.model('WorkExperience', schema);