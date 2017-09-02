var mongoose = require('mongoose')
var customerSchema = mongoose.Schema({
  client_name: String,
})

module.exports = mongoose.model('Customer', customerSchema)
