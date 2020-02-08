const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const PaidSchema = require('../../models/financial/paidModel');
const Paid = mongoose.model('Paid', PaidSchema);

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Paid Route');
  next();
})

// getPayments
router.get('/financial/paid', (req, res) => {
    Paid.find({}, (err, paid) => {
      if (err){
        res.send(err);
      }
      res.status(200);
      res.json(paid);
  });
});

// addNewPaid
router.post('/financial/paid', (req, res) => {
  let newPaid = new Paid(req.body);
  newPaid.save((err, paid) => {
      if (err){
        console.log(err);
        res.status(400);
        res.send(err);      
      }
      res.status(200);
      res.json(paid);
  });
});

// updatePaid
router.put('/financial/paid/:paidID', (req, res) => {
  Paid.findOneAndUpdate({ _id: req.params.paidID}, req.body, { new: true, useFindAndModify: false}, (err, paid) => {
      if (err){
          res.send(err);
      }
      res.status(200);
      res.json(paid);
  });
});

// deleteClient
router.delete('/financial/paid/:paidID', (req, res) => {
  Client.remove({ _id: req.params.paidID}, (err, paid) => {
      if (err){
          res.send(err);
      }
      res.status(200);
      res.json({ message: 'Successfully deleted client'});
  });
});


module.exports = router;