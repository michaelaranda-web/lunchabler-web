import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from '../../../../../shared/actions/userActions';
import { fetchRestaurantsData } from '../../../../../shared/actions/restaurantActions';
import AddUserForm from './AddUserForm.jsx';
import AddRestaurantForm from './AddRestaurantForm.jsx';

export class ControlPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchRestaurantsData();
  }

  renderRestaurantList() {
    return (
      this.props.restaurants.map((restaurant, i) => {
        return <div key={i}>{`${i+1}: ${restaurant.name}`}</div>;
      })
    );
  }

  renderUserList() {
    return (
        this.props.users.map((user, i) => {
          return <div key={i}>{`${i+1}: ${user.name}`}</div>;
        })
    );
  }

  render() {
    return (
      <div id="control-page">
        <AddUserForm />
        <h3>Registered Users</h3>
        {this.renderUserList()}
        <AddRestaurantForm />
        <h3>List of Restaurants</h3>
        <div className="restaurants-list">
          {this.renderRestaurantList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants : state.restaurants,
    users: state.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsersData()),
    fetchRestaurantsData: () => dispatch(fetchRestaurantsData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPage)