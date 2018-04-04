var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var
	userName = req.query.txtUserName,
	userPwd = req.query.txtUserPwd,
	userName2 = req.param('txtUserName'),
	userPwd2 = req.param('txtUserPwd');

	console.log('req.query用户名:'+userName);
	console.log('req.query密码:'+userPwd);
	console.log('req.param用户名:'+userName2);
	console.log('req.param密码:'+userPwd2);

  	res.render('subform', { title: '提交表单及接收参数示例' });
});

module.exports = router;
