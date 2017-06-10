import React from 'react';
import $ from "jquery";
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

    let data = {
      name: this.state.value
    };

    $.ajax({
      type: "POST",
      url: '/add_user',
      data: data,
      dataType: "json"
    }).done(() => {
      alert("Posted to add_user successfully!");
    }).fail((err) => {
      console.log(err);
    });
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
};