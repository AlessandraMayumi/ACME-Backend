const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const ClientSchema = require('../../models/crm/clientModel');
const Client = mongoose.model('Client', ClientSchema);

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Client Route');
  next();
})

// getClients
router.get('/client', (req, res) => {
    Client.find({}, (err, client) => {
      if (err){
        res.send(err);
      }
      res.status(200);
      res.json(client);
  });
});

// addNewClient
router.post('/client', (req, res) => {
  let newClient = new Client(req.body);
  newClient.save((err, client) => {
      if (err){
        console.log(err);
        res.status(400);
        res.send(err);      
      }
      res.status(200);
      res.json(client);
  });
});
/*
// getClientsWithID
router.get('/:clientID', (req, res) => {
  Client.findById(req.params.clientID, (err, client) => {
      if (err){
          res.send(err);
      }
      res.status(200);
      res.json(client);
  });
});
*/
// updateClient
router.put('/client/:clientID', (req, res) => {
  Client.findOneAndUpdate({ _id: req.params.clientID}, req.body, { new: true, useFindAndModify: false}, (err, client) => {
      if (err){
          res.send(err);
      }
      res.status(200);
      res.json(client);
  });
});

// deleteClient
router.delete('/client/:clientID', (req, res) => {
  Client.remove({ _id: req.params.clientID}, (err, client) => {
      if (err){
          res.send(err);
      }
      res.status(200);
      res.json({ message: 'Successfully deleted client'});
  });
});


module.exports = router;