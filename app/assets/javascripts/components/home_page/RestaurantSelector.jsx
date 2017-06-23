import React from 'react';
import { connect } from 'react-redux';
import { RestaurantItem } from './restaurant_item/RestaurantItem.jsx';
import { RestaurantViewerPanel } from './RestaurantViewerPanel.jsx';
import { fetchRestaurantsData } from '../../../../../shared/actions/restaurantActions';
import { fetchUsersData } from '../../../../../shared/actions/userActions';

export class RestaurantSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRestaurant: 0
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

  render() {
    return (
      <div className="restaurant-selector">
        <div className="restaurant-list">
          {this.renderRestaurantList()}
        </div>

        <RestaurantViewerPanel restaurant={this.props.restaurants[this.state.currentRestaurant]}
                               totalRestaurants={this.props.restaurants.length}/>
      </div>
    );
  }

  updateCurrentRestaurant(key) {
    this.setState({currentRestaurant: key});
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