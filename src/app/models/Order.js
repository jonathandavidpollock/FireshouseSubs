var mongoose = require('mongoose')
var orderSchema = mongoose.Schema({
  product_id: {type:  mongoose.Schema.Types.ObjectId, ref: 'Product'},
  total_price: {type: Number}
})

module.exports = mongoose.model('Order', orderSchema)
