var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Welcome to my Node.js/Express App' });
});

/* GET User list page */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs) {
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

/* GET Add User page */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add new user' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {
  var db = req.db;

  var userName = req.body.username;
  var userEmail = req.body.useremail;

  var collection = db.get('usercollection');

  collection.insert({
    "username" : userName,
    "useremail" : userEmail
  }, function(err, doc) {
    if(err) {
      res.send("There was a problem adding the information to the database.");
    }
    else {
      res.redirect("userlist");
    }
  });

});

module.exports = router;
