var express = require('express');
var router = express.Router();
var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('usecrypto', { title: '加密字符串示例' });
});

router.post('/',function(req, res){
	var 
	userName = req.body.txtUserName,
	userPwd = req.body.txtUserPwd;

	//生成口令的散列表
	var md5 = crypto.createHash('md5'); 
	//crypto模块功能是加密并生成各种散列
	var en_upwd = md5.update(userPwd).digest('hex');

	console.log('加密后的密码：'+en_upwd);

	res.render('usecrypto', {title: '加密字符串事例'});
});

module.exports = router;
