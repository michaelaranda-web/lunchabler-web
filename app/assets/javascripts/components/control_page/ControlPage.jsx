import React from 'react';
import { connect } from 'react-redux';
import {AddUserForm} from './AddUserForm.jsx';

export class ControlPage extends React.Component {
  renderRestaurantList() {
    return (
      this.props.restaurants.map((restaurant, i) => {
        return <div key={i}>{`${i}: ${restaurant.name}`}</div>;
      })
    );
  }

  render() {
    return (
      <div id="control-page">
        <AddUserForm />
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
    restaurants : state.restaurants
  }
}

export default connect(mapStateToProps)(ControlPage)