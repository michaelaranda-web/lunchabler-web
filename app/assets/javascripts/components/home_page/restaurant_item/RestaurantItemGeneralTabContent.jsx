import React from 'react';
import UserComment from './UserComment.jsx';

export class RestaurantItemGeneralTabContent extends React.Component {
  renderComments() {
    if (this.props.restaurant.comments) {
      return (
        <div className="comments-section">
          <h4 className="comments-header">Comments</h4>
          {
            this.props.restaurant.comments.map((comment, i) => {
              return (
                <div key={i}>
                  <UserComment comment={comment} />
                  <hr />
                </div>
              )
            })
          }
        </div>
      );
    }
  }
  
  render() {
    return (
      <div className="general-tab-content">
        {this.renderComments()}
      </div>
    );  
  }
}

export default RestaurantItemGeneralTabContent;