import React from 'react';
import { connect } from 'react-redux';
import RestaurantItem from './restaurant_item/RestaurantItem.jsx';
import { RestaurantSummary } from './RestaurantSummary.jsx';
import LunchGroup from './LunchGroup.jsx';
import { fetchRestaurantsData } from '../../../../../shared/actions/restaurantActions';
import { fetchUsersData } from '../../../../../shared/actions/userActions';
import { sortRestaurantsByLunchGroupPreferences } from '../../../../../helpers/restaurantHelper';
import { findWithAttr } from '../../../../../helpers/arrayHelper';

export class RestaurantSelector extends React.Component {
  renderRestaurantList() {
    return this.props.orderedRestaurantList.map((restaurant, i) => {
      return (
        <div key={i}>
          <RestaurantItem id={i}
                          restaurant={restaurant}
                          rankingNumber={i+1}
                          totalRestaurants={this.props.orderedRestaurantList.length}
                          usersInLunchGroup={this.props.lunchGroup}/>
          <hr />
        </div>
      );
    });
  }

  renderRestaurantSummary() {
    return (
        <RestaurantSummary restaurant={this.props.orderedRestaurantList[this.props.currentRestaurantIndex]}
                           totalRestaurants={this.props.orderedRestaurantList.length}/>
    );
  }

  render() {
    return (
      <div className="restaurant-selector">
        <LunchGroup />
        <div className="restaurant-list">
          {this.renderRestaurantList()}
        </div>
        {this.renderRestaurantSummary()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentRestaurantIndex: state.currentRestaurantIndex
  }
};

export default connect(mapStateToProps, {})(RestaurantSelector)