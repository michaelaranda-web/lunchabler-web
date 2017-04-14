import express from 'express';

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Lunchabler' });
});

/* GET Search page. */
router.get('/search', (req, res) => {
  let db = req.db;
  let collection = db.get('restaurants');
  collection.find().then((doc) => {
    res.render('search', { restaurants: doc });
  });
});

/* GET User list page */
router.get('/userlist', (req, res) => {
  let db = req.db;
  let collection = db.get('usercollection');
  collection.find({}, {}, (e, docs) => {
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

/* GET Add User page */
router.get('/newuser', (req, res) => {
  res.render('newuser', { title: 'Add new user' });
});

/* POST to Add User Service */
router.post('/adduser', (req, res) => {
  let db = req.db;

  let userName = req.body.username;
  let userEmail = req.body.useremail;

  let collection = db.get('usercollection');

  collection.insert({
    "username" : userName,
    "useremail" : userEmail
  }, (err, doc) => {
    if(err) {
      res.send("There was a problem adding the information to the database.");
    }
    else {
      res.redirect("userlist");
    }
  });
});

module.exports = router;
