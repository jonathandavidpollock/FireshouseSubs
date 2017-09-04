var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
  product_id: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  total_price: {type: Number}
})

orderSchema.pre('save', function(next) {
    const Product = mongoose.model('Product')
    

  if (this.product_id.length === 0) {
    this.total_price = 0
    next()
  }
  
  let totalPrice = 0;

  // console.log('products arr[]', this.product_id)
  this.product_id.forEach((id) => {

   Product.findById(id, (err, product)=>{
    err ? console.log('err--', err ) : console.log('product--', product)
    // console.log('price$$$$', product[0].price)
    totalPrice += product.price

    console.log('💵 TOTAL PRICE', totalPrice )
    // this.total_price = 0
    this.total_price = totalPrice.toFixed(2);
    
  }).then( function(){    
    next()
  })
   

  })


 
})

module.exports = mongoose.model('Order', orderSchema)