import React from 'react';
import { connect } from 'react-redux';
import { addUserToLunchGroup, removeUserFromLunchGroup } from '../../../../../shared/actions/lunchGroupActions';

export class LunchGroupV2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lunch-group">
        <h4 className="header">
          Let's eat! Specify today's lunch group to determine the most optimal restaurant choices.
        </h4>
        <div className="lunch-group-section">
          {this.renderLunchGroupList()}
        </div>
      </div>
    );
  }

  renderLunchGroupList() {
    return (
      this.props.users.map((user, i) => {
        return (
          <div key={i} className="lunch-group-checkbox">
            <input
                id={`checkbox-${i}`}
                type="checkbox"
                onChange={() => {this.onCheckboxCheck(user.name)}}
              />
            <label htmlFor={`checkbox-${i}`}>
              {user.name}
            </label>
          </div>
        );
      })
    )
  }
  
  onCheckboxCheck(userName) {
    if (this.props.lunchGroup.indexOf(userName) !== -1) {
      this.props.removeUserFromLunchGroup(userName);
    } else {
      this.props.addUserToLunchGroup(userName);
    }
  }
}

const mapStateToProps = state => {
  return {
    users : state.users,
    lunchGroup: state.lunchGroup
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addUserToLunchGroup: (user) => dispatch(addUserToLunchGroup(user)),
    removeUserFromLunchGroup: (user) => dispatch(removeUserFromLunchGroup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LunchGroupV2)