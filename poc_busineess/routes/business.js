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
    models.Business.findByPk(req.params.id).then(function(record) {
      res.render('business/detail', {
        record: record
        });
      });
  });


  




module.exports = router;