import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import monk from 'monk';

import { matchPath } from 'react-router';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from '../shared/reducers/combinedReducers';
import { renderToStaticMarkup } from 'react-dom/server';
import { SSRComponent } from './SSRComponent';

let db_url = (process.env.NODE_ENV == 'production') ? process.env.MONGODB_URI : 'localhost:27017/lunchabler';
let db = monk(db_url);

let app = express();

// uncomment after placing your favicon in /app
//app.use(favicon(path.join(__dirname, 'app', 'favicon.ico')));

app.use(express.static('dist'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/api/users", (req, res) => {
  db.get("users").find().then((users) => {
    console.log("[Server] Users: " + users.length);
    res.send({users});
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

const routes = [
  '/',
  '/search',
  '/control'
];

app.get('*', (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);

  if (!match) {
    res.status(404).send('Not Found');
    return;
  }

  db.get("restaurants").find().then((restaurants) => {
    let store = createStore(rootReducer, {restaurants}, applyMiddleware(thunk));

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
