import React from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <p>This is the home page.</p>
        <Link to="search">Link to Search Page</Link>
      </div>
    );
  }
}