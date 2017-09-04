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
    // Order.find((err,order) => {
    //     console.log("!!!! PRODUCT ID !!!! ", order[0].product_id)
    //     for
    //     res.json(order);
    //   })
    //   
      // Order.find((err, order) => {
      //   let tempIds = []
      //   order.forEach((id) => {
      //     console.log("BEFORE------> ", tempIds);
      //     tempIds.push(id.product_id);
      //     console.log("AFTER-----> ", tempIds);
      //   })
      //   console.log("Here -----> ", tempIds);
      //   Product.find({ "product_id" : { id: { $in : tempIds } } },
      //     (err, r)=>{
      //       console.log(r)
      //     })
      
    });


  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  //
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/order/:orderID', (req, res) => {

  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  //
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.post('/order', (req, res) => {
    console.log('Create NEW Order:', req.body.product_id);
    const newOrder = new Order(req.body);
    // newOrder.product_id.push(req.body.product_id)
    // req.body.product_id.forEach((id) => {
    //   newOrder.product_id.push(id)
    // })
    newOrder.save(function(err, order){
      if(err) return res.send(err);
      res.json(order);
    })
  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  //
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.put('/order/:orderID', (req, res) => {

  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // 
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.delete('/order/:orderID', (req, res) => {

  })

  return router;
}
