import React from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../../../../../shared/actions/restaurantActions';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export class AddRestaurantForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitAddRestaurant = this.submitAddRestaurant.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  submitAddRestaurant(e) {
    e.preventDefault();
    this.props.addRestaurant(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div id="add-restaurant-form">
        <h1>Add new restaurant</h1>

        <form onSubmit={this.submitAddRestaurant}>
          <FormGroup
              controlId="formBasicText"
          >
            <ControlLabel>Name</ControlLabel>
            <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter restaurant name"
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
    addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant))
  };
};

export default connect(null, mapDispatchToProps)(AddRestaurantForm)