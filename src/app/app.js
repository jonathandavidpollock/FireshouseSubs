const bodyParser = require('body-parser')
const glob = require('glob')
const cors = require('cors')

module.exports = function(app) {
  app.use(cors())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())


  const models = glob.sync(__dirname + '/models/*.js')
  console.log(models)
  models.forEach( function(modelFileName) {
    require(modelFileName)
  });

  const controllers = glob.sync(__dirname + '/controllers/*.js')

  controllers.forEach( function(contollerFileName) {
    let controller = require(contollerFileName)
    controller(app)
  });

}