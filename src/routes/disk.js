/**
 * Created by sunlin on 2016/12/28.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('disk', { title: 'Home' });
});

module.exports = router;
