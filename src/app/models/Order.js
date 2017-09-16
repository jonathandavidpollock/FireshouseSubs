var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
  product_id: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  total_price: {type: Number, default: 0}
})

orderSchema.methods.getTotalPrice = function(prices){

  let total = 0      
  prices.length !== 0 ? prices.forEach(price => total += price ) : 0   
  return total

}

module.exports = mongoose.model('Order', orderSchema)