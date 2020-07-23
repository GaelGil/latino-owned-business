'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');


// 
// View all Questionnaires
// 
router.get('/', function(req, res, next) {
    models.Business.findAll().then(function(records){
        res.render('business/index', {
        records: records
        });
      });
  });
  

  router.get('/:id/', function(req, res, next) {
    models.Socialmedia.findAll().then(function(socialMedias){
      models.Business.findByPk(req.params.id).then(function(business) {
        res.render('business/detail', {
          socialMedias: socialMedias,
          business: business
        });
      });
    });
  });

  // TODO: Add search funtionality
  // TODO: Add Tags Model 
  // TODO: Display Social Media for each businesses


  




module.exports = router;