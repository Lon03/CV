"use strict";
/*********************************************************************
 *                        Module dependencies
 *********************************************************************/
const express       = require('express');
const router        = express.Router();
const controller    = require('./controller');

router.route('/User')
    .get(controller.getUser);

router.route('/Projects')
    .get(controller.getProjects);

router.route('/Education')
    .get(controller.getEducation);

router.route('/Work')
    .get(controller.getWork);

router.route('/emailSend')
    .post(controller.emailSend);

module.exports = router;
