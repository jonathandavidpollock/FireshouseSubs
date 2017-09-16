var mongoose = require('mongoose')

var Product = require('../app/models/Product')
var Order = require('../app/models/Order')
var Customer = require('../app/models/Customer')

const NODE_ENV = process.env.NODE_ENV || 'development'

if(NODE_ENV === 'development') {
  require('dotenv').load()
}

if(NODE_ENV === 'development') {
  console.log('IM HEREE!!!!!!!! ', NODE_ENV )
  mongoose.connect('mongodb://'+ process.env.MONGO_HOST +'/'+ process.env.MONGO_DATABASE)
} else {
  mongoose.connect(process.env.MONGODB_URI,  function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  })
}

var products = [
  new Product({
    name: 'Hook & Ladder',
    price: 5.99
  }),
  new Product({
    name: 'Smokehouse beef & cheddar brisket',
    price: 6.99
  }),
  new Product({
    name: 'Firehouse Meatball',
    price: 5.20
  })
]

var done = 0

products.forEach(product =>{
  product.save((err, result)=>{
    done++
    if (done === products.length){
      exit()
    }
  })
})

function exit(){
  mongoose.disconnect()
}
