const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const ServiceSchema = require('../../models/crm/serviceModel');
const Service = mongoose.model('Service', ServiceSchema);
const ClientSchema = require('../../models/crm/clientModel');
const Client = mongoose.model('Client', ClientSchema);

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Service Route');
    next();
})

// getServices
router.get('/client/:clientID', (req, res) => {
    Service.find({client_id: req.params.clientID}, (err, service) => {
        if (err){
            res.send(err);
        }
        res.status(200);
        res.json(service);
    });
});

// addNewService
router.post('/client/:clientID', (req, res) => {
    myobj =  Object.assign({}, {client_id: req.params.clientID}, req.body)
    let newService = new Service(myobj);
    newService.save((err, service) => {
        if (err){
            res.status(400);
            res.send(err);
        }
        res.status(200);
        res.json(service);
    });
});

// updateClient
router.put('/client/:clientID/:serviceID', (req, res) => {
    Service.findOneAndUpdate({ _id: req.params.serviceID}, req.body, { new: true, useFindAndModify: false}, (err, service) => {
        if (err){
            res.send(err);
        }
        res.status(200);
        res.json(service);
    });
});

// deleteClient
router.delete('/client/:clientID/:serviceID', (req, res) => {
    Client.remove({ _id: req.params.serviceID}, (err, service) => {
        if (err){
            res.send(err);
        }
        res.status(200);
        res.json({ message: 'Successfully deleted service'});
    });
});
        

module.exports = router;