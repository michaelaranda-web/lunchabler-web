import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../../../shared/app.jsx';

let props = window.APP_PROPS;

ReactDOM.render(
  <BrowserRouter>
    <App {...props}/>
  </BrowserRouter>
, document.getElementById('lunchabler-app'));