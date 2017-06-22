import React from 'react';
import { connect } from 'react-redux';
import {removeUserPreferenceToRestaurant} from '../../../../../../shared/actions/restaurantActions';

export class UserPreferenceLabel extends React.Component {
  render() {
    return (
        <div className="user-preference-label">
          <span className="label label-default user-name">{this.props.user.name}</span>
          <span className="label label-default remove"
                onClick={this.onRemoveClick.bind(this)}>x</span>
        </div>
    );
  }

  onRemoveClick() {
    this.props.removeUserPreferenceToRestaurant(this.props.user.name,
                                  this.props.restaurantName,
                                  this.props.preference);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeUserPreferenceToRestaurant: (user, restaurant, preference) =>
        dispatch(removeUserPreferenceToRestaurant(user, restaurant, preference))
  };
};

export default connect(null, mapDispatchToProps)(UserPreferenceLabel)