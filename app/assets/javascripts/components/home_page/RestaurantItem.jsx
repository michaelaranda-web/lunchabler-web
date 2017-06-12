import React from 'react';

export class RestaurantItem extends React.Component {
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
      return <li key={i}>{user.name}</li>
    })
  }



  render() {
    return (
      <div className="restaurant-item">
        <img className="restaurant-thumbnail"
            src="https://s3-media2.fl.yelpcdn.com/bphoto/rKoDbuldNAVSr-DuKweMyQ/90s.jpg"/>
        <div className="restaurant-details">
          <h3>{this.props.restaurant.name}</h3>
        </div>
        {this.renderPreferenceList(this.props.restaurant.mehs, "Meh's", "meh-list")}
        {this.renderPreferenceList(this.props.restaurant.nos, "No's", "no-list")}
      </div>
    );
  }
}