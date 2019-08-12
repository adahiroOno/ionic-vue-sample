var connection = require('../mysqlConnection');
router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM users';
  connection.query(query, function(err, rows) {
    res.render('index', {
      boardList: rows
    });
  });
});
  module.exports = router;