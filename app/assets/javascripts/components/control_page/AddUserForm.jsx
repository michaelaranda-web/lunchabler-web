import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../../../../shared/actions/userActions';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export class AddUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitAddUser = this.submitAddUser.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  submitAddUser(e) {
    e.preventDefault();
    this.props.addUser(this.state.value);
    this.setState({ value: '' })
  }

  render() {
    return (
      <div id="add-user-form">
        <h1>Add new user</h1>

        <form onSubmit={this.submitAddUser}>
          <FormGroup
              controlId="formBasicText"
          >
            <ControlLabel>Name</ControlLabel>
            <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter name"
                onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch(addUser(user))
  };
};

export default connect(null, mapDispatchToProps)(AddUserForm)