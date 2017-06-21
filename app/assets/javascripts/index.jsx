import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import styles from '../../../app/assets/stylesheets/style.scss';
import { App } from '../../../shared/app.jsx';
import rootReducer from '../../../shared/reducers/combinedReducers';

let props = window.APP_PROPS;
let store = createStore(rootReducer, props.preloadedState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App {...props}/>
      </BrowserRouter>
    </Provider>
, document.getElementById('lunchabler-app'));