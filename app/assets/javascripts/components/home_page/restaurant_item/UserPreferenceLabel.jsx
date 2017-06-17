import React from 'react';

export class UserPreferenceLabel extends React.Component {
  render() {
    return (
        <div className="user-preference-label">
          <span className="label label-default user-name">{this.props.user.name}</span>
          <span className="label label-default remove">x</span>
        </div>
    );
  }
}