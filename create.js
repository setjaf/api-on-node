var nano = require('nano')('http://localhost:5984');
var test_db = nano.db.use('test_db')