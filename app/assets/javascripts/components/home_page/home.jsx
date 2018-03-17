import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRestaurantsData } from '../../../../../shared/actions/restaurantActions';
import { fetchUsersData } from '../../../../../shared/actions/userActions';
import { sortRestaurantsByLunchGroupPreferences } from '../../../../../helpers/restaurantHelper';
import RestaurantSelector from './RestaurantSelector.jsx'

export class Home extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
    this.props.fetchUsersData();
  }
  
  render() {
    return (
        <div id="home-page">
          <h1>Lunchabler</h1>
          <Link to="control">Link to Control Page</Link>

          <RestaurantSelector 
              orderedRestaurantList={sortRestaurantsByLunchGroupPreferences(this.props.restaurants, this.props.lunchGroup)}
              lunchGroup={this.props.lunchGroup}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    lunchGroup: state.lunchGroup
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurantsData()),
    fetchUsersData: () => dispatch(fetchUsersData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)