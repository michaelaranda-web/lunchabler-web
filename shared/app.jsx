import React from 'react';
import { Home } from '../app/assets/javascripts/components/home.jsx';
import { Search } from '../app/assets/javascripts/components/search.jsx';
import { Switch, Route } from 'react-router-dom';

export class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Route exact path='/' component={Home}/>
        <Route path='/search' component={Search}/>
      </div>
    );
  }
};