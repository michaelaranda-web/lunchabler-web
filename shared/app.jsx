import React from 'react';
import Home  from '../app/assets/javascripts/components/home_page/home.jsx';
import ControlPage from '../app/assets/javascripts/components/control_page/ControlPage.jsx';
import { Switch, Route } from 'react-router-dom';

export class App extends React.Component {
  renderHome() {
    return <Home />;
  }

  renderControlPage() {
    return <ControlPage />;
  }

  render() {
    return (
      <div id="main">
        <Route exact path='/' component={this.renderHome.bind(this)}/>
        <Route path='/control' component={this.renderControlPage.bind(this)}/>
      </div>
    );
  }
}