var assert = require('assert');

import { sortRestaurantsByLunchGroupPreferences } from "../helpers/restaurantHelper";

function restaurantFixture(name, mehs, nos) {
  return [
    { 
      "name": name || "Test Restaurant", 
      "mehs": mehs || [], 
      "nos": nos || []
    }
  ]
}

function userFixture(name) {
  var username = name || "Test User";
  
  return {"name": username}
}

var user = userFixture();

describe('#sortRestaurantsByLunchGroupPreferences', function() {
  def('restaurants', function() { 
    return [
      restaurantFixture("A"),
      restaurantFixture("B"),
      restaurantFixture("C")
    ] 
  });
  
  describe('only one restaurant has a meh preference', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal($restaurants.length, 3);
    });
  });
});
