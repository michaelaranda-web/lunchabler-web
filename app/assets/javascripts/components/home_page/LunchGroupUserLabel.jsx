import React from 'react';

export class LunchGroupUserLabel extends React.Component {
  render() {
    return (
        <div className="lunch-group-user-label">
          <span className="label label-success user-name">{this.props.userName}</span>
          <span className="label label-success remove"
                onClick={this.onRemoveClick.bind(this)}>x</span>
        </div>
    );
  }

  onRemoveClick() {
    this.props.onRemoveClick(this.props.userName);
  }
}