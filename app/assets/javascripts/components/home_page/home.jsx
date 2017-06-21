import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantSelector from './RestaurantSelector.jsx'

export class Home extends React.Component {
  render() {
    return (
        <div id="home-page">
          <h1>Lunchabler</h1>
          <Link to="search">Link to Search Page</Link>
          <br/>
          <Link to="control">Link to Control Page</Link>

          <RestaurantSelector />
        </div>
    );
  }
}