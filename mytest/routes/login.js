var express = require('express');
var router = express.Router();
var userModel = require('../model/user');

router.get('/',function(req,res){
	console.log('11111')
})

router.post('/',function(req,res){
	console.log(req.body)
	
	userModel.find({
		phone:req.body.phone,
		password:req.body.password
	},function(error,info){
		if(!error){
			console.log('success')
			res.send('ok')
		}else{
			console.log("error")
		}
	})       
})


/*router.post("/",function(req,res){
	console.log(req.body);
	
	userModel.find({
		phone:req.body.phone,
		password:req.body.password
	},function(error,info){
		if(!error){
			if(info.length>0){
				console.log(info);
				res.send(info)
			}else{
				console.log('密码错误');
				res.send(404);
			}
		}
	})
})
*/
module.exports=router;