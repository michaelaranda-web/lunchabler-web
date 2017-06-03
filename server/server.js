import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongo from 'mongodb';
import monk from 'monk';

import { StaticRouter, matchPath } from 'react-router';
import React from 'react';
import render from './render.js';
import { App } from '../shared/app.jsx';

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

const routes = [
  '/',
  '/search'
];

app.get('*', (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);

  if (!match) {
    res.status(404).send('Not Found');
    return;
  }

  res.status(200).send(render(
    (
      <StaticRouter context={{}} location={req.url}>
        <App />
      </StaticRouter>
    )
  ));
});

// Make our db accessible to our router
app.use((req,res,next) => {
  req.db = db;
  next();
});

module.exports = app;
