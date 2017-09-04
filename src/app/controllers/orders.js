const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Importing Models
const Product = mongoose.model('Product');
const Order = mongoose.model('Order');

module.exports = function(app){
	app.use('/api/v1', router);


  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Get Orders
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/order', (req, res) => {
    order.all((err) => {
      res.status(500).json(err); // errorCallback
    }, (data) => {
      res.status(200).json(data); // successCallback
    });
  });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  //
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/order/:orderID', (req, res) => {
    const reqBody = req.body;
    order.one(req.body, (err) => {
      res.status(500).json(err); // errorCallback
    }, (data) => {
      res.status(200).json(data); // successCallback
    });
  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Create New Order
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.post('/order', (req, res) => {
    console.log('Create NEW Order:', req.body);
    const newOrder = new Order(req.body);
    newOrder.save(function(err, order){
      if(err) return res.send(err);
      res.json(order);
    })
  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  //
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.put('/order/:orderID', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    order.update(req.body, (err) => {
      res.status(500).json(err); // errorCallback
    }, (data) => {
      res.status(200).json(data); // successCallback
    });
  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  //
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.delete('/order/:orderID', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    order.remove(req.body, (err) => {
      res.status(500).json(err); // errorCallback
    }, (data) => {
      res.status(200).json(data); // successCallback
    });
  })

  return router;
}
