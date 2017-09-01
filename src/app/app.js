const bodyParser = require('body-parser')
const glob = require('glob')
const cors = require('cors')

module.exports = (app) => {
  app.use(cors())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())


  const models = glob.sync(__dirname + '/models/*.js')
  console.log(models)
  models.forEach( (modelFileName) => {
    require(modelFileName)
  });

  const controllers = glob.sync(__dirname + '/controllers/*.js')

  controllers.forEach( (contollerFileName) => {
    let controller = require(contollerFileName)
    controller(app)
  });

}