var mongoose = require('mongoose')
var productSchema = mongoose.Schema({
  name: String,
  price: {type: Number}
})

module.exports = mongoose.model('Product', productSchema)