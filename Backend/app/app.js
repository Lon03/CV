"use strict";
/****************************************************
 *                   Module
 ***************************************************/
const express    = require('express');
const logger     = require('morgan');
const mongoose   = require('mongoose');
const process    = require('process');
const colors     = require('colors');

/****************************************************
 *                  middleware
 ****************************************************/

const bodyParser = require('body-parser');

/****************************************************
 *                  additional
 ****************************************************/

const app        = express();

/****************************************************
 *                  routes
 ****************************************************/

const routes     = require('./routes/route');

/****************************************************
 *                  Connect to DB
 ****************************************************/

const dbConfig   = require('./config.json')[process.env.NODE_ENV || 'development'];

mongoose.connect(dbConfig.url);
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbConfig.url}`.green);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`.red);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected'.red);
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected through app termination'.red);
        process.exit(0);
    });
});

require('./database/model_methods/Create');

let allowCrossDomain = (req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next();
};

app.use(logger('dev'));
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);

/**
 * catch 404 and forward to error handler
 */
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/****************************************************
 *                 error handlers
 ****************************************************/

/**
 * development error handler
 * will print stacktrace
 */
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({'error': {
            message: err.message,
            error: err}});
    });
}

/**
 * production error handler
 * no stacktraces leaked to user
 */
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({'error': {
        message: err.message,
        error: {}}});
});


module.exports = app;