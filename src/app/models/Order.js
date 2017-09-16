var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
  product_id: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  total_price: {type: Number, default: 0}
})

const getTotalPrice = function(next) {
  const Product = mongoose.model('Product')
  

  if (this.product_id.length === 0) {
  	console.log("ARRAY IS EMPTY!")
    this.total_price = 0
    next()
  }

  // let tempTotal = 0;

  this.product_id.forEach((id, i) => {
    
    Product.findById(id, (err, product) =>{

      this.total_price += product.price
      console.log('💵 total_price', this.total_price ) 

      console.log('i', i, id)
      if (i+1 ===  this.product_id.length) {
        console.log('i+1:', i+1)
        console.log('this.product_id.length', this.product_id.length)
        // this.total_price = tempTotal
        console.log('next!!!!!!! ->>>>', this.total_price)
        next()
      }  
      
    })
  })
}

orderSchema.pre('save', getTotalPrice)
orderSchema.pre('update', getTotalPrice)

module.exports = mongoose.model('Order', orderSchema)