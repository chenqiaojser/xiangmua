var express = require('express');
var router = express.Router();
var userModel = require('../model/user');

router.get('/',function(req,res){
	console.log('11111')
})

router.post('/',function(req,res){
	console.log(req.body)
	
	userModel.create({
		phone:req.body.phone,
		password:req.body.password
	},function(error,info){
		if(!error){

			res.send('ok')
		}else{
			console.log(error)
		}
	})       
})

module.exports=router;