import React from 'react';
import { connect } from 'react-redux';
import { RestaurantItem } from './restaurant_item/RestaurantItem.jsx';
import { RestaurantViewerPanel } from './RestaurantViewerPanel.jsx';
import { fetchRestaurantsData } from '../../../../../shared/actions/restaurantActions';

export class RestaurantSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRestaurant: 0
    };
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  renderLoading() {
    return <h1>Loading...</h1>;
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
    if (this.props.isLoading) {
      return this.renderLoading()
    }

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
    isLoading: state.restaurantsIsLoading,
    restaurants : state.restaurants
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurantsData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSelector)