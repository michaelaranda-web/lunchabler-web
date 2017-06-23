import React from 'react';

export class RestaurantItem extends React.Component {
  render() {
    return (
      <div className="restaurant-item" onClick={this._onClick.bind(this)}>
        <div className="restaurant-details">
          <h4>{this.props.restaurant.name}</h4>
          <span>{this.props.rankingNumber} of {this.props.totalRestaurants}</span>
        </div>
      </div>
    );
  }

  _onClick() {
    this.props.onClick(this.props.restaurant.name);
  }
}