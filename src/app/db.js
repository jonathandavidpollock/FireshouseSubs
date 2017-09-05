var mongoose = require('mongoose');
var colors = require('colors');

//mongodb://username:password@hostnameLoirt/database

mongoose.connect('mongodb://'+ process.env.MONGO_HOST +'/'+ process.env.MONGO_DATABASE)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'conection error: '))
db.once('open', ()=>{
  console.log('database conecction 👍🏼'.green)
})

mongoose.Promise = global.Promise

module.export =db
