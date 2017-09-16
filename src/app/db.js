var mongoose = require('mongoose');

const NODE_ENV = process.env.NODE_ENV || 'development'

if(NODE_ENV === 'development') {
  require('dotenv').load()
}

if(NODE_ENV === 'development') {
  console.log('IM HEREE!!!!!!!! ', NODE_ENV )
  mongoose.connect('mongodb://'+ process.env.MONGO_HOST +'/'+ process.env.MONGO_DATABASE)
} else {
  mongoose.connect(process.env.MONGODB_URI,  function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  })
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'conection error: '))
db.once('open', ()=>{
  console.log('database conecction 👍🏼')
})

mongoose.Promise = global.Promise

module.export =db
