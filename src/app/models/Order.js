var mongoose = require('mongoose')
const Product = mongoose.model('Product')

var orderSchema = mongoose.Schema({
  product_id: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  total_price: getTotal(this.product_id)
})

module.exports = mongoose.model('Order', orderSchema)


function getTotal(arrId){
  
  if (arrId.length === 0) {
    return 0;
  }
  
  let totalPrice = 0

  arrId.forEach((id) => {
   let prod = new Product()
   prod.findById(id, (product)=>{
    totalPrice += product.price
   })
  });

  
  
  return totalPrice;
}