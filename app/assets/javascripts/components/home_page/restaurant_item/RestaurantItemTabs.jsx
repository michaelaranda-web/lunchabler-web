import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import RestaurantItemPreferencesTabContent from './RestaurantItemPreferencesTabContent.jsx';
import RestaurantItemGeneralTabContent from './RestaurantItemGeneralTabContent.jsx';

export class RestaurantItemTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    this.setState({key});
  }

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="restaurant-item-tabs">
        <Tab eventKey={1} title="General">
          <RestaurantItemGeneralTabContent restaurant={this.props.restaurant} />
        </Tab>
        <Tab eventKey={2} title="History">History Tab Content</Tab>
        <Tab eventKey={3} title="Preferences">
          <RestaurantItemPreferencesTabContent restaurant={this.props.restaurant} />
        </Tab>
      </Tabs>
    );
  }
}