import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import {addUserPreferenceToRestaurant} from '../../../../../../shared/actions/restaurantActions';

export class UserPreferenceRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div className="user-preference-row">
        <Autocomplete
            className="search-box"
            getItemValue={(item) => item.name}
            items={this.props.users}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                  {item.name}
                </div>
            }
            value={this.state.value}
            onChange={(e) => this.setState({value: e.target.value})}
            onSelect={(val) => this.setState({value: val})}
            shouldItemRender={matchNameToValue}
            inputProps={{onKeyUp: this._handleKeyPress.bind(this)}}
        />
      </div>
    );
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      for (let user of this.props.users) {
        if (user.name === this.state.value) {
          this.props.addUserPreferenceToRestaurant(this.state.value,
                                                    this.props.restaurant.name,
                                                    this.props.preference);
          this.setState({value: ''});
          return;
        }
      }
    }
  }
}

function matchNameToValue(item, value) {
  return (
      item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

const mapStateToProps = state => {
  return {
    users : state.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addUserPreferenceToRestaurant: (user, restaurant, preference) =>
        dispatch(addUserPreferenceToRestaurant(user, restaurant, preference))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPreferenceRow)