var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log(req);
	console.log(res);
	if(req.cookies.islogin){
		console.log('usecookies-cookies:' + req.cookies.islogin);
		req.session.islogin = req.cookies.islogin;
	}

	if(req.session.islogin){
		console.log('usecookies:' + req.session.islogin);
		res.locals.islogin = req.session.islogin;
	}

  	res.render('usecookies', { title: '使用cookies示例' });
});

router.post('/',function(req, res) {
	req.session.islogin = 'success';
	res.locals.islogin = req.session.islogin;

	res.cookie('islogin', 'sucess', { maxAge: 20000 });

	console.log('usecookiesPost:' + req.session.islogin);

	res.render('usecookies', { title: '使用cookies示例' });
});

module.exports = router;
