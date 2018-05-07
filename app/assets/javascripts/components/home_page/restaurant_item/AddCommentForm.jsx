import React from 'react';
import { connect } from 'react-redux';
import { addCommentToRestaurant } from '../../../../../../shared/actions/restaurantActions';


export class AddCommentForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: "",
      comment: ""
    }
  }
  
  render() {
    return (
      <form>
        <p>Who you?</p>
        <input className="username-input" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}></input>
        <p>Whatchu got to say?</p>
        <textarea value={this.state.value} onChange={this.handleTextAreaChange.bind(this)}></textarea>
        <div className="buttons-row">
          <button type="button" 
                  className="btn btn-primary"
                  onClick={this.submitComment.bind(this)}>Submit</button>
          <button type="button" 
                  className="btn btn-secondary"
                  onClick={this.props.onCancelButtonClick}>Cancel</button>
        </div>
      </form>
    );  
  }
  
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  
  handleTextAreaChange(event) {
    this.setState({comment: event.target.value});
  }
  
  submitComment(event) {
    event.preventDefault();
    let self = this;
    
    this.props.addCommentToRestaurant(this.props.restaurantName, this.state.username, this.state.comment).then(() => {
      self.props.onSubmitComplete();
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCommentToRestaurant: (restaurant, user, comment) => dispatch(addCommentToRestaurant(restaurant, user, comment))
  };
};

export default connect(null, mapDispatchToProps)(AddCommentForm);