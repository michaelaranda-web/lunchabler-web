import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRestaurantsData } from '../../../../../shared/actions/restaurantActions';
import { RestaurantItem } from './restaurant_item/RestaurantItem.jsx';

export class Home extends React.Component {
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
          <RestaurantItem restaurant={restaurant}
                          rankingNumber={i+1}
                          totalRestaurants={this.props.restaurants.length}/>
          <hr />
        </div>
      );
    });
  }

  render() {
    if (!this.props.restaurants) { return; }

    if (this.props.isLoading) {
      return this.renderLoading()
    }
    else {
      return (
          <div id="home-page">
            <h1>Lunchabler</h1>
            <Link to="search">Link to Search Page</Link>
            <br/>
            <Link to="control">Link to Control Page</Link>

            {this.renderRestaurantList()}
          </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    restaurants : state.restaurants,
    isLoading: state.restaurantsIsLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurantsData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)