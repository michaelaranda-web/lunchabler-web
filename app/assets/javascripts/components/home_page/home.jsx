import React from 'react';
import { Link } from 'react-router-dom';
import { RestaurantItem } from './RestaurantItem.jsx';

export class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <p>This is the home page.</p>
        <Link to="search">Link to Search Page</Link>
        <br/>
        <Link to="control">Link to Control Page</Link>

        <RestaurantItem name={this.props.restaurants[0].name}
                        mehList={[{name: "JW"}, {name: "Tales"}, {name: "Derek"}, {name: "Vincent"}]}
                        noList={[{name: "Chewy"}, {name: "Morgan"}]}/>
      </div>
    );
  }
}