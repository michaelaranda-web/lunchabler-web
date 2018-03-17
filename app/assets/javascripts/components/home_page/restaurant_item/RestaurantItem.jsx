import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentRestaurantIndex } from '../../../../../../shared/actions/restaurantActions';
import { findWithAttr } from '../../../../../../helpers/arrayHelper';

export class RestaurantItem extends React.Component {
  render() {
    return (
      <div className="restaurant-item" onClick={this.updateCurrentRestaurant.bind(this)}>
        <div className="restaurant-details">
          <h4>{this.props.restaurant.name}</h4>
          <span>{this.props.rankingNumber} of {this.props.totalRestaurants}</span>
        </div>
        <div className="preference-counts">
          <span className="mehs">M: </span><span>{this.getMehCount()}</span>
          <span className="nos">N: </span><span>{this.getNoCount()}</span>
        </div>
      </div>
    );
  }

  getNoCount() {
    if (this.props.usersInLunchGroup.length === 0) {
      return this.props.restaurant.nos.length;
    }

    let noCount = 0;

    this.props.restaurant.nos.map((userNoPref) => {
      if (this.props.usersInLunchGroup.indexOf(userNoPref.name) !== -1) {
        noCount++;
      }
    });

    return noCount;
  }

  getMehCount() {
    if (this.props.usersInLunchGroup.length === 0) {
      return this.props.restaurant.mehs.length;
    }

    let mehCount = 0;

    this.props.restaurant.mehs.map((userMehPref) => {
      if (this.props.usersInLunchGroup.indexOf(userMehPref.name) !== -1) {
        mehCount++;
      }
    });

    return mehCount;
  }

  updateCurrentRestaurant() {
    let indexOfCurrentRestaurant = this.props.restaurant ?
        findWithAttr(this.props.restaurants, "name", this.props.restaurant.name)
        : 0;
    
    this.props.updateCurrentRestaurantIndex(indexOfCurrentRestaurant);
  }
}

const mapStateToProps = state => {
  return {
    restaurants : state.restaurants
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentRestaurantIndex: (index) => dispatch(updateCurrentRestaurantIndex(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem)