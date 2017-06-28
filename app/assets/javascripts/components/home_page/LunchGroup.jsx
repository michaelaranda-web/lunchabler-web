import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import {LunchGroupUserLabel} from './LunchGroupUserLabel.jsx';
import { findWithAttr } from '../../../../../helpers/arrayHelper';

export class LunchGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      usersInLunchGroup: []
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
            inputProps={{onKeyUp: this._handleKeyPress.bind(this)}}
        />
        <div className="lunch-group-section">
          {this.renderLunchGroupList()}
        </div>
      </div>
    );
  }

  renderLunchGroupList() {
    return (
      this.state.usersInLunchGroup.map((userName, i) => {
        return <LunchGroupUserLabel key={i}
                                    userName={userName}
                                    onRemoveClick={this._onUserLabelRemoveClick.bind(this)} />
      })
    )
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      let isValidUser = findWithAttr(this.props.users, "name", this.state.value) !== -1;
      let isNotAlreadyInLunchGroup = this.state.usersInLunchGroup.indexOf(this.state.value) === -1;

      if (isValidUser && isNotAlreadyInLunchGroup) {
        let newGroup = this.state.usersInLunchGroup.slice();
        newGroup.push(this.state.value);
        this.setState({usersInLunchGroup: newGroup});
      }
    }
  }

  _onUserLabelRemoveClick(userName) {
    let index = findWithAttr(this.state.usersInLunchGroup, "name", userName);
    let newGroup = this.state.usersInLunchGroup.slice();
    newGroup.splice(index, 1);
    this.setState({usersInLunchGroup: newGroup});
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

export default connect(mapStateToProps, null)(LunchGroup)