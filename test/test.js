var assert = require('assert');
import { sortRestaurantsByLunchGroupPreferences } from "../helpers/restaurantHelper";
import { userFixture, restaurantFixture } from "./fixtures/fixtures";

function getOrderString(restaurants) {
  return restaurants.map((restaurant) => {
    return restaurant.name
  }).join();
}

const Michael = userFixture("Michael");
const Morgan = userFixture("Morgan");
const Mike = userFixture("Mike");

describe('#sortRestaurantsByLunchGroupPreferences', function() {
  def('usersInLunchGroup', function() { 
    return [
      Michael,
      Morgan,
      Mike
    ] 
  });
  
  describe('only one restaurant has a meh preference', function() {
    def('restaurants', function() { 
      return [
        restaurantFixture("A", [Michael]),
        restaurantFixture("B"),
        restaurantFixture("C")
      ] 
    });
  
    it('sorts the meh restaurant as the last result', function() {
      var sortedRestaurants = sortRestaurantsByLunchGroupPreferences($restaurants, $usersInLunchGroup);
      assert.equal(getOrderString(sortedRestaurants), "B,C,A");
    });
  });
});
