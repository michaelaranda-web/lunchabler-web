import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from '../../../../../shared/actions/userActions';
import AddUserForm from './AddUserForm.jsx';

export class ControlPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
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
        <h1>List of Restaurants</h1>
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
    fetchUsers: () => dispatch(fetchUsersData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPage)