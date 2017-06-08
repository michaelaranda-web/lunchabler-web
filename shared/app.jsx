import React from 'react';
import { Home } from '../app/assets/javascripts/components/home.jsx';
import { Search } from '../app/assets/javascripts/components/search_page/search.jsx';
import { Switch, Route } from 'react-router-dom';

export class App extends React.Component {
  renderHome() {
    return <Home restaurants={this.props.restaurants}/>;
  }

  renderSearch() {
    return <Search restaurants={this.props.restaurants}/>;
  }

  render() {
    return (
      <div id="main">
        <Route exact path='/' component={this.renderHome.bind(this)}/>
        <Route path='/search' component={this.renderSearch.bind(this)}/>
      </div>
    );
  }
};