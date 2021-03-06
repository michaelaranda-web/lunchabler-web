import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import monk from 'monk';
import validator from 'express-validator';
import {body, validationResult} from 'express-validator/check';
import {sanitize} from 'express-validator/filter';

import { matchPath } from 'react-router';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from '../shared/reducers/combinedReducers';
import { renderToStaticMarkup } from 'react-dom/server';
import { SSRComponent } from './SSRComponent.jsx';

let db_url = (process.env.NODE_ENV == 'production') ? process.env.MONGODB_URI : 'michaelaranda-web-lunchabler-5771462:27017/lunchabler';
let db = monk(db_url);

let app = express();

// uncomment after placing your favicon in /app
//app.use(favicon(path.join(__dirname, 'app', 'favicon.ico')));

app.use(express.static('dist'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(validator());

app.get("/api/users", (req, res) => {
  db.get("users").find().then((users) => {
    console.log("[Server] Users: " + users.length);
    res.send({users});
  });
});

app.get("/api/restaurants", (req, res) => {
  db.get("restaurants").find().then((restaurants) => {
    console.log("[Server] Restaurants: " + restaurants.length);
    res.send({restaurants: restaurants});
  });
});

app.post('/api/add_user', (req, res) => {
  let user = {
    name: req.body.name
  };

  db.collection('users').insert(user, (err) => {
    if(err) {
      console.log(err);
    }
    console.log("[Server] Added Name: " + req.body.name);
    res.send(req.body);
  });
});

app.post('/api/remove_user', (req, res) => {
  let user = {
    name: req.body.name
  };

  db.collection('users').remove(user, (err) => {
    if(err) {
      console.log(err);
    }
    console.log("[Server] Removed Name: " + req.body.name);
    res.send(req.body);
  });
});

app.post('/api/add_restaurant', (req, res) => {
  let restaurant = {
    name: req.body.restaurant,
    mehs: [],
    nos: []
  };

  db.collection('restaurants').insert(restaurant, (err) => {
    if(err) {
      console.log(err);
    }
    console.log("[Server] Added Restaurant: " + req.body.restaurant);
    res.send(req.body);
  });
});

app.post('/api/remove_restaurant', (req, res) => {
  let restaurant = {
    name: req.body.restaurant
  };

  db.collection('restaurants').remove(restaurant, (err) => {
    if(err) {
      console.log(err);
    }
    console.log("[Server] Removed Restaurant: " + req.body.restaurant);
    res.send(req.body);
  });
});

app.patch('/api/add_preference', (req, res) => {
  let user = {name: req.body.user};
  let newPreference = req.body.preference === "meh" ? {mehs: user} : {nos: user};

  try {
    db.collection('restaurants').update(
      {name: req.body.restaurant},
      {$push: newPreference}
    ).then(() => {
      console.log("[Server] Added Preference for", user.name);
      res.send(req.body);
    });
  } catch (e) {
    console.log(e);
  }
});

app.patch('/api/remove_preference', (req, res) => {
  let user = {name: req.body.user};
  let preferenceToRemove = req.body.preference === "meh" ? {mehs: user} : {nos: user};

  try {
    db.collection('restaurants').update(
        {name: req.body.restaurant},
        {$pull: preferenceToRemove}
    ).then(() => {
      console.log("[Server] Removed Preference for", user.name);
      res.send(req.body);
    });
  } catch (e) {
    console.log(e);
  }
});

app.patch('/api/add_comment', (req, res) => {
  let sanitizedRestaurantName = req.sanitize('restaurant').trim();
  let sanitizedComment = req.sanitize('comment').trim();
  let sanitizedUsername = req.sanitize('username').trim();
  
  let restaurant = {name: sanitizedRestaurantName};
  let newComment = {username: sanitizedUsername, content: sanitizedComment};

  try {
    db.collection('restaurants').update(
      {name: sanitizedRestaurantName},
      {$push: {comments: newComment}}
    ).then(() => {
      console.log("[Server] Added Restaurant Comment for", sanitizedRestaurantName);
      res.send(req.body);
    });
  } catch (e) {
    console.log(e);
  }
  res.send(req.body);
});

const routes = [
  '/',
  '/control'
];

app.get('*', (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);

  if (!match) {
    res.status(404).send('Not Found');
    return;
  }

  db.get("restaurants").find().then((restaurants) => {
    let store = createStore(rootReducer, {restaurants: restaurants}, applyMiddleware(thunk));

    res.status(200).send(renderToStaticMarkup(
      <Provider store={store} >
        <SSRComponent location={req.url}
                      preloadedState={store.getState()}
                      restaurants={restaurants} />
      </Provider>
    ));
  }).catch((e) => {
    console.log(e);
  });
});

module.exports = app;
