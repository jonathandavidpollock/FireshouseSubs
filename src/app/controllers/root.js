const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

module.exports = function(app){
	app.use('/api/v1', router);
}
router.get('/', (req, res, next) => {
	console.log("I am on root controller")
	res.json({message: "Hello World"})
})