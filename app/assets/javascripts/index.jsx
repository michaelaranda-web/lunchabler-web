import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from '../../../shared/app.jsx';
import { tempReducer } from '../../../shared/reducers/combinedReducers';

let props = window.APP_PROPS;
let store = createStore(tempReducer, props.preloadedState);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App {...props}/>
      </BrowserRouter>
    </Provider>
, document.getElementById('lunchabler-app'));