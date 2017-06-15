import React from 'react';
import {RestaurantItemTabs} from './RestaurantItemTabs.jsx';

export class RestaurantItem extends React.Component {
  render() {
    return (
      <div className="restaurant-item">
        <img className="restaurant-thumbnail"
            src="https://s3-media2.fl.yelpcdn.com/bphoto/rKoDbuldNAVSr-DuKweMyQ/90s.jpg"/>
        <div className="restaurant-details">
          <h3>{this.props.restaurant.name}</h3>
        </div>
        <RestaurantItemTabs restaurant={this.props.restaurant} />
      </div>
    );
  }
}