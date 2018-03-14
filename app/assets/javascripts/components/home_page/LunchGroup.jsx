import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import {LunchGroupUserLabel} from './LunchGroupUserLabel.jsx';
import { findWithAttr } from '../../../../../helpers/arrayHelper';
import { addUserToLunchGroup, removeUserFromLunchGroup } from '../../../../../shared/actions/lunchGroupActions';

export class LunchGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div className="lunch-group">
        <h4 className="header">
          Let's eat! Add some names to find out the best restaurant choices for the group.
        </h4>
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
            inputProps={{onKeyUp: this.addUserToLunchGroup.bind(this)}}
        />
        <div className="lunch-group-section">
          {this.renderLunchGroupList()}
        </div>
      </div>
    );
  }

  renderLunchGroupList() {
    return (
      this.props.lunchGroup.map((userName, i) => {
        return <LunchGroupUserLabel key={i}
                                    userName={userName}
                                    onRemoveClick={this._onUserLabelRemoveClick.bind(this)} />
      })
    )
  }

  addUserToLunchGroup(e) {
    if (e.key === 'Enter') {
      let isValidUser = findWithAttr(this.props.users, "name", this.state.value) !== -1;
      let isNotAlreadyInLunchGroup = this.props.lunchGroup.indexOf(this.state.value) === -1;

      if (isValidUser && isNotAlreadyInLunchGroup) {
        this.props.addUserToLunchGroup(this.state.value);
        this.setState({value: ''});
      }
    }
  }

  _onUserLabelRemoveClick(userName) {
    this.props.removeUserFromLunchGroup(userName);
  }
}

function matchNameToValue(item, value) {
  return (
    item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(LunchGroup)