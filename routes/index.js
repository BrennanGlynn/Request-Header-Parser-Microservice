var express = require('express');
var router = express.Router();
var requestIp = require('request-ip');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Request-Header-Parser-Microservice' });
});

router.get('/api/whoami', function (req, res) {
	var clientIp = requestIp.getClientIp(req);
	var	language = req.headers['accept-language'];
	var	software = req.headers['user-agent'];
	var start = software.indexOf('(') + 1;
	var end = software.indexOf(')');

	res.json({
		'ipaddress': clientIp,
		'language': language.slice(0, language.indexOf(',')),
		'software': software.slice(start, end)
	});
});

module.exports = router;
