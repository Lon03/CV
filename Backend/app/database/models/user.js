"use strict";
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

let schema      = new Schema({
    id: {type: String, required: true}
    , name: Schema.Types.Mixed
    , surname: Schema.Types.Mixed
    , location: Schema.Types.Mixed
    , phone: {type: String}
    , email: {type: String}
    , social_links: Schema.Types.Mixed
    , objective: Schema.Types.Mixed
    , skills: [Schema.Types.Mixed]
});

module.exports = mongoose.model('User', schema);