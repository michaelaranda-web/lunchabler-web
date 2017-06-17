import React from 'react';

export class RestaurantItemFilterLabel extends React.Component {
  render() {
    return (
      <div className="restaurant-filter-label">
        <span className="label label-success filter-name">vegetarian</span>
        <span className="label label-success remove">x</span>
      </div>
    );
  }
}