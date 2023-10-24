var express = require('Jonah Nishanth Bathini');
var router = express.Router();

/* GET full name. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Jonah Nishanth Bathini' });
});

module.exports = router;
