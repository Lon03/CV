"use strict";
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

let schema      = new Schema({
    id: {type: String, required: true}
    , userID: {type: String, required: true}
    , nameInstitution: Schema.Types.Mixed
    , image: {type: String}
    , faculty: Schema.Types.Mixed
    , receiptDate: {type: String}
    , expirationDate: {type: String}
});

module.exports = mongoose.model('Education', schema);