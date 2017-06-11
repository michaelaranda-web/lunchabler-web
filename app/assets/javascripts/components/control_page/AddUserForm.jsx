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

  getValidationState() {
    if (this.state.value.length === 0) {
      return 'error';
    }
    return 'success';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  submitAddUser(e) {
    e.preventDefault();

    let newUser = {
      name: this.state.value
    };

    this.props.addUser(newUser);
  }

  render() {
    return (
      <div id="add-user-form">
        <h1>Add new user</h1>

        <form onSubmit={this.submitAddUser}>
          <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
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

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch(addUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm)