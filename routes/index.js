var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lunchabler' });
});

/* GET Hello World page. */
router.get('/search', function(req, res) {
  var db = req.db;
  var collection = db.get('restaurants');
  collection.find().then(function(doc) {
    res.render('search', { restaurants: doc });
  });
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
