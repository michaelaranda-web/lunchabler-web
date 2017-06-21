import React from 'react';
import { Home }  from '../app/assets/javascripts/components/home_page/home.jsx';
import { Search } from '../app/assets/javascripts/components/search_page/search.jsx';
import ControlPage from '../app/assets/javascripts/components/control_page/ControlPage.jsx';
import { Switch, Route } from 'react-router-dom';

export class App extends React.Component {
  renderHome() {
    return <Home />;
  }

  renderSearch() {
    return <Search restaurants={this.props.restaurants}/>;
  }

  renderControl() {
    return <ControlPage />;
  }

  render() {
    return (
      <div id="main">
        <Route exact path='/' component={this.renderHome.bind(this)}/>
        <Route path='/search' component={this.renderSearch.bind(this)}/>
        <Route path='/control' component={this.renderControl.bind(this)}/>
      </div>
    );
  }
};