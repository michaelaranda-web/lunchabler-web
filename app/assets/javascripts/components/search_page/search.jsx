import React from 'react';

export class Search extends React.Component {
  render() {
    return (
      <div id="search-page">
        <p>This is the search page.</p>
        <p>Second restaurant name: {this.props.restaurants[1].name}</p>
      </div>
    );
  }
}