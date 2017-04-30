"use strict";
/*********************************************************************
 *                        Module dependencies
 *********************************************************************/
const nodemailer        = require('nodemailer');
const process           = require('process');
const User              = require('../database/models/user.js');
const Projects          = require('../database/models/projects.js');
const Education         = require('../database/models/education.js');
const WorkExperience    = require('../database/models/workExperience.js');
const config            = require('../config.json')[process.env.NODE_ENV || 'development'];

let userID              = 'GF-0981-4284-4487-JKH6';

exports.getUser         = getUser;
exports.getProjects     = getProjects;
exports.getEducation    = getEducation;
exports.getWork         = getWork;
exports.emailSend       = emailSend;



function getUser(req, res) {
    return new Promise((resolve, reject) => {

        User.findOne({
            id: userID
        })
            .then(data => {
                resolve(res.json(data));
            })
            .catch(err => {
                reject(res.json({error: err}));
            })
    });
}

function getProjects(req, res) {
    return new Promise((resolve, reject) => {

        Projects.find({
            userID: userID
        })
            .then(data => {
                resolve(res.json(data));
            })
            .catch(err => {
                reject(res.json({error: err}));
            })
    });
}

function getEducation(req, res) {
    return new Promise((resolve, reject) => {

        Education.find({
            userID: userID
        })
            .then(data => {
                resolve(res.json(data));
            })
            .catch(err => {
                reject(res.json({error: err}));
            })
    });
}

function getWork(req, res) {
    return new Promise((resolve, reject) => {

        WorkExperience.find({
            userID: userID
        })
            .then(data => {
                resolve(res.json(data));
            })
            .catch(err => {
                reject(res.json({error: err}));
            })
    });
}

function emailSend(req, res) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.nodemailer.user,
            pass: config.nodemailer.pass
        }
    });

    let mailOptions = {
        from: '"Lending✔" <testingtestlending@gmail.com>',
        to: req.body.data.email,
        subject: 'Lending✔',
        text: req.body.data.text
    };

    /**
     *Send mail
     */
    return new Promise((resolve, reject) => {

        transporter.sendMail(mailOptions)
        .then(data => {
            console.log('Message %s sent: %s', data.messageId, data.response);
            resolve(res.json('Send'));
        })
        .catch(() => {
            reject(res.json('Error'));
        })
    });
}