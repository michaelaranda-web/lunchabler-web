import React from 'react';
import { connect } from 'react-redux';
import { removeUser, fetchUsersData } from '../../../../../shared/actions/userActions';
import { removeRestaurant, fetchRestaurantsData } from '../../../../../shared/actions/restaurantActions';
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
        return (
            <div key={i}>
              <div className="restaurant">{`${i+1}: ${restaurant.name}`}</div>
              <div className="delete-button glyphicon glyphicon-remove"
                   onClick={() => { this.props.removeRestaurant(restaurant.name) }}></div>
            </div>
          );
      })
    );
  }

  renderUserList() {
    return (
        this.props.users.map((user, i) => {
          return (
            <div key={i}>
              <div className="username">{`${i+1}: ${user.name}`}</div>
              <div className="delete-button glyphicon glyphicon-remove"
                   onClick={() => { this.props.removeUser(user.name) }}></div>
            </div>
          );
        })
    );
  }

  render() {
    return (
      <div id="control-page">
        <AddUserForm />
        {this.renderUserList()}
        <AddRestaurantForm />
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
    removeUser: (user) => dispatch(removeUser(user)),
    removeRestaurant: (restaurant) => dispatch(removeRestaurant(restaurant)),
    fetchUsers: () => dispatch(fetchUsersData()),
    fetchRestaurantsData: () => dispatch(fetchRestaurantsData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPage)