import React from 'react';

export class UserComment extends React.Component {
  render() {
    return (
      <div className="comment">
        <p className="username">{this.props.comment.username} says...</p>
        <p className="content">{this.props.comment.content}</p>
      </div>
    );  
  }
}

export default UserComment;