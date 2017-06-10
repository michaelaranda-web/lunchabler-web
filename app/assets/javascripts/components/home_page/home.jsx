import React from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <p>This is the home page.</p>
        <Link to="search">Link to Search Page</Link>
        <br/>
        <Link to="control">Link to Control Page</Link>

        <p>First restaurant: {this.props.restaurants[0].name}</p>
      </div>
    );
  }
}