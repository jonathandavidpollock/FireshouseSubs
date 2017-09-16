const NODE_ENV = process.env.NODE_ENV || 'development'

if(NODE_ENV === 'development') {
  require('dotenv').load()
}

const express = require('express')
const app = express()

const port = 8080

app.listen(process.env.PORT || port , () => {
  console.log('Server on port: '+ port)
})

const myApp = require('./src/app/app')
myApp(app)