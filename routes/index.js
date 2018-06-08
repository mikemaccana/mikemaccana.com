var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mike MacCana | Portfolio' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Mike MacCana | About' });
});

module.exports = router;
