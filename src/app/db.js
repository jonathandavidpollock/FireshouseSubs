var mongoose = require('mongoose');

//mongodb://username:password@hostnameLoirt/database

mongoose.connect(process.env.MONGODB_URI,  function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'conection error: '))
db.once('open', ()=>{
  console.log('database conecction 👍🏼')
})

mongoose.Promise = global.Promise

module.export =db
