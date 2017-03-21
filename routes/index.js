var express = require('express');
var router = express.Router();
var requestIp = require('request-ip');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Request-Header-Parser-Microservice' });
});

router.get('/api/whoami', function (req, res) {
	var clientIp = requestIp.getClientIp(req);
	var	language;
	var	software;
	res.json({
		'clientIp': clientIp,
		'headers': req.headers
	});
});

module.exports = router;
