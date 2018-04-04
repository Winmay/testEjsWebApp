var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('usecrypto', { title: '加密字符串示例' });
});

module.exports = router;
