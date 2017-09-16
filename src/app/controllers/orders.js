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
    Order.find()
      .populate('product_id') 
      .exec(function(err, product){
        res.json(product)
      });
    });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Get Products
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/products', (req, res) => {
    console.log("Getting all products! 🙌")
    Product.find()
    .exec((err, products) => {
      res.json(products)
    })
  })

  router.get('/order/:orderID', (req, res) => {
    // console.log(req.params.orderID)
    Order.findById(req.params.orderID, (err, docs) => {
      console.log("DOCS REURNED--- ",docs)
      res.json(docs)
    }).populate('product_id') 

  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Create New Order
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.post('/order', (req, res) => {
    // console.log('Create NEW Order:', req.body);
    const newOrder = new Order(req.body)
    let total = []
    let i = 0
    req.body.product_id.forEach((id) => {
      Product.findById(id, (err, product) => {
        i++
        total.push(product.price)
        if(i === req.body.product_id.length){
          newOrder.total_price = newOrder.getTotalPrice(total)
          newOrder.save((err, order) => {
          if(err) return res.send(err);
            res.json(order);
          })
        }      
      })
    })
  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Getting an order by Id and updating it.
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.put('/order/:orderID', (req, res) => {
    console.log("Update Order now: ", req.body )
    let arryTotal = []
    let i = 0
    req.body.product_id.forEach((id) => {
      Product.findById(id, (err, product) => {
        i++
        arryTotal.push(product.price)
        if(i === req.body.product_id.length){
         Order.findOne({_id: req.params.orderID}, (err, order) => {
            order.total_price = order.getTotalPrice(arryTotal)
            order.product_id = req.body.product_id
            console.log("3: ", order)
            order.save((err, order) => {
              if(err) return res.send(err);
              console.log("hello")
              res.json(order);
            });
          })
        }
      })
    })    
  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Deleting by the orderID.
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.delete('/order/:orderID', (req, res) => {
    Order.remove({_id: req.params.orderID}, (err) => {
      console.log("DELETE THIS NOW!!!! ", req.params.orderID )
      res.sendStatus(200);
    })
  })

  return router;
}

