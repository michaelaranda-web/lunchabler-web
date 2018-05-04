import React from 'react';
import UserComment from './UserComment.jsx';

export class RestaurantItemGeneralTabContent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showComments: true
    };
  }
  
  renderContent() {
    if (this.props.restaurant.comments) {
      return (
        <div className="comments-section">
          <div className="header-section">
            <h4 className="comments-header">Comments</h4>
            {this.renderHeaderIcon()}
          </div>
          {this.renderSection()}
        </div>
      );
    } 
  }
  
  renderSection() {
    if(this.state.showComments) {
      return this.renderCommentsList();
    } else {
      return this.renderAddCommentSection();
    }
  }
  
  renderCommentsList() {
    return (
      this.props.restaurant.comments.map((comment, i) => {
        return (
          <div key={i}>
            <UserComment comment={comment} />
            <hr />
          </div>
        )
      })
    );
  }
  
  renderAddCommentSection() {
    return (
      <div className="add-comment-section">
        <p>Whatchu got to say?</p>
        <textarea></textarea>
        <div className="buttons-row">
          <button type="button" className="btn btn-primary">Save</button>
          <button type="button" className="btn btn-secondary">Cancel</button>
        </div>
      </div>
    );
  }
  
  renderHeaderIcon() {
    if(this.state.showComments) {
      return (
        <div className="add-comment-button glyphicon glyphicon-plus"
              onClick={this.showAddCommentSection.bind(this)}></div>
      )
    } else {
      return (
        <div className="return-button glyphicon glyphicon-arrow-left"
              onClick={this.showCommentsList.bind(this)}></div>
      )
    }
  }
  
  showCommentsList() {
    this.setState({ showComments: true });
  }
  
  showAddCommentSection() {
    this.setState({ showComments: false });
  }
  
  render() {
    return (
      <div className="general-tab-content">
        {this.renderContent()}
      </div>
    );  
  }
}

export default RestaurantItemGeneralTabContent;