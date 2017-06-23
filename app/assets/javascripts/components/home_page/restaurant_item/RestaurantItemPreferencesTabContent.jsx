import React from 'react';
import { connect } from 'react-redux';
import UserPreferenceLabel from './UserPreferenceLabel.jsx';
import UserPreferenceRow from './UserPreferenceRow.jsx';

export class RestaurantItemPreferencesTabContent extends React.Component {
  renderPreferenceList(users, preference, listHeader, listClassName) {
    return (
        <div className={listClassName}>
          <h4>{listHeader}</h4>
          <ul className="user-list">
            {this._renderPreferenceListItems(users, preference)}
            <UserPreferenceRow />
          </ul>
        </div>
    );
  }

  _renderPreferenceListItems(users, preference) {
    if (!users) { return; }

    return users.map((user, i) => {
      return <UserPreferenceLabel key={i}
                                  user={user}
                                  preference={preference}
                                  restaurantName={this.props.restaurant.name}/>
    })
  }

  renderLoading() {
    return <h1>Loading...</h1>;
  }

  render() {
    if (this.props.isLoading) {
      return this.renderLoading()
    }

    return (
        <div className="preferences-tab-content">
          {this.renderPreferenceList(this.props.restaurant.mehs, "meh", "Meh's", "meh-list")}
          {this.renderPreferenceList(this.props.restaurant.nos, "no", "No's", "no-list")}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.restaurantsIsLoading
  }
};

export default connect(mapStateToProps, null)(RestaurantItemPreferencesTabContent)