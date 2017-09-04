var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
  product_id: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  total_price: {type: Number, default: 0}
})

const getTotalPrice = function(next) {
  const Product = mongoose.model('Product')
  

  if (this.product_id.length === 0) {
    this.total_price = 0
    next()
  }

  // let tempTotal = 0;

  this.product_id.forEach((id) => {

    // ------- WIP ---------
    // let query = Product.findById(id)

    // query.then((product) =>{
    //   // err ? console.log('err--', err ) : console.log('product--', product)
    //   console.log('product in then----------->', product)    
    //   totalPrice += product.price 
    //   console.log('💵 TOTAL PRICE', totalPrice )
    //   this.total_price = totalPrice.toFixed(2)
      
    // })

    // query.then(function (product) {
    //   next()  
    // })
    // ------- WIP ---------


    
    Product.findById(id, (err, product) =>{
      err ? console.log('err--', err ) : console.log('product--', product)
      this.total_price += product.price

      // console.log('💵 tempTotal', tempTotal )
      console.log('💵 total_price', this.total_price )
      
      
    }).then( () => {   
      console.log('💵 💵 💵 total_price', this.total_price )      
    }).then( ()=> {
      console.log('!!!!!!SAVING!!!!!') 
      next()
    })
  })
}

orderSchema.pre('save', getTotalPrice)
orderSchema.pre('update', getTotalPrice)

module.exports = mongoose.model('Order', orderSchema)