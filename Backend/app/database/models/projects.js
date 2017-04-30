"use strict";
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

let schema      = new Schema({
    id: {type: String, required: true}
    , userID: {type: String, required: true}
    , name: Schema.Types.Mixed
    , image: {type: String}
    , receiptDate: Schema.Types.Mixed
    , expirationDate: Schema.Types.Mixed
    , role: Schema.Types.Mixed
    , description: Schema.Types.Mixed
    , technologies: {type: String}
    , projectLinks: Schema.Types.Mixed
});
module.exports = mongoose.model('Projects', schema);