var mongoose = require('mongoose')

var orderSchema = mongoose.Schema({
  product_id: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  total_price: Number
})

orderSchema.methods.getTotal = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  
  let totalPrice = 0
  arr.forEach( product => {    
    totalPrice += product.price
  })      

  return totalPrice;
}

module.exports = mongoose.model('Order', orderSchema)