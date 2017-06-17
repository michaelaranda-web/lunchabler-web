import React from 'react';
import {UserPreferenceLabel} from './UserPreferenceLabel.jsx';

export class RestaurantItemPreferencesTabContent extends React.Component {
  renderPreferenceList(users, listHeader, listClassName) {
    return (
        <div className={listClassName}>
          <h4>{listHeader}</h4>
          <ul className="user-list">
            {this._renderPreferenceListItems(users)}
          </ul>
        </div>
    );
  }

  _renderPreferenceListItems(users) {
    if (!users) { return; }

    return users.map((user, i) => {
      return <UserPreferenceLabel key={i} user={user} />
    })
  }

  render() {
    return (
        <div className="preferences-tab-content">
          {this.renderPreferenceList(this.props.restaurant.mehs, "Meh's", "meh-list")}
          {this.renderPreferenceList(this.props.restaurant.nos, "No's", "no-list")}
        </div>
    );
  }
}