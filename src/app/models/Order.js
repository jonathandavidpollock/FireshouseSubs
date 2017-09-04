var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
  product_id: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  total_price: {type: Number, default:0}
})

orderSchema.pre('save', function(next) {
  const Product = mongoose.model('Product')
    

  if (product_id.length === 0) {
    this.total_price = 0
    next()
  }
  
  let totalPrice = 0

  product_id.forEach((id) => {
   let prod = new Product()
   prod.findById(id, (product)=>{
    totalPrice += product.price
   })
  })  
  this.total_price = totalPrice;

  next()
})

module.exports = mongoose.model('Order', orderSchema)