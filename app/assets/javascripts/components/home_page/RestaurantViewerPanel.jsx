import React from 'react';
import {RestaurantItemTabs} from './restaurant_item/RestaurantItemTabs.jsx';

export class RestaurantViewerPanel extends React.Component {
  render() {
    return (
      <div className="restaurant-viewer-panel">
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