var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页'
                          ,users:[{username: 'Wilson'},
                                {username: 'Wilson Zhong'},
                                {username: 'Zhong Wei'}] 
            });
});

module.exports = router;
