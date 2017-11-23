var express = require('express');
var router = express.Router();
const sql = require('sql-crud');
let crud = new sql('mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
