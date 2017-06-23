import React from 'react';
import { connect } from 'react-redux';
import { RestaurantItem } from './restaurant_item/RestaurantItem.jsx';
import { RestaurantSummary } from './RestaurantSummary.jsx';
import { fetchRestaurantsData } from '../../../../../shared/actions/restaurantActions';
import { fetchUsersData } from '../../../../../shared/actions/userActions';
import { findWithAttr } from '../../../../../helpers/arrayHelper';

export class RestaurantSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRestaurant: null
    };
  }

  componentDidMount() {
    this.props.fetchRestaurants();
    this.props.fetchUsersData();
  }

  renderRestaurantList() {
    return this.props.restaurants.map((restaurant, i) => {
      return (
        <div key={i}>
          <RestaurantItem id={i}
                          restaurant={restaurant}
                          rankingNumber={i+1}
                          totalRestaurants={this.props.restaurants.length}
                          onClick={this.updateCurrentRestaurant.bind(this)}/>
          <hr />
        </div>
      );
    });
  }

  renderRestaurantSummary() {
    let indexOfCurrentRestaurant = this.state.currentRestaurant ?
        findWithAttr(this.props.restaurants, "name", this.state.currentRestaurant)
        : 0;

    return (
        <RestaurantSummary restaurant={this.props.restaurants[indexOfCurrentRestaurant]}
                           totalRestaurants={this.props.restaurants.length}/>
    );
  }

  render() {
    return (
      <div className="restaurant-selector">
        <div className="restaurant-list">
          {this.renderRestaurantList()}
        </div>
        {this.renderRestaurantSummary()}
      </div>
    );
  }

  updateCurrentRestaurant(restaurantName) {
    this.setState({currentRestaurant: restaurantName});
  }
}

const mapStateToProps = state => {
  return {
    restaurants : state.restaurants
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurantsData()),
    fetchUsersData: () => dispatch(fetchUsersData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSelector)