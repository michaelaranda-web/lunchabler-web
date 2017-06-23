import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';

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
        />
      </div>
    );
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

export default connect(mapStateToProps, null)(UserPreferenceRow)