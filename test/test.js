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
  var sortedRestaurants;
  
  beforeEach(function() {
    sortedRestaurants = sortRestaurantsByLunchGroupPreferences($restaurants, $usersInLunchGroup);
  });
  
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
      assert.equal(getOrderString(sortedRestaurants), "B,C,A");
    });
  });
  
  describe('only one restaurant has a no preference', function() {
    def('restaurants', function() { 
      return [
        restaurantFixture("A", null, [Michael]),
        restaurantFixture("B"),
        restaurantFixture("C")
      ] 
    });
  
    it('sorts the no restaurant as the last result', function() {
      assert.equal(getOrderString(sortedRestaurants), "B,C,A");
    });
  });
  
  describe('one restaurant has mehs, but another restaurant has more', function() {
    describe("users are unique across preferences", function() {
      def('restaurants', function() { 
      return [
        restaurantFixture("A", [Michael]),
        restaurantFixture("B", [Morgan, Mike]),
        restaurantFixture("C")
      ] 
      });
    
      it('sorts the restaurant with fewer mehs above the other', function() {
        assert.equal(getOrderString(sortedRestaurants), "C,A,B");
      });
    });
    
    describe("user is not unique across preferences", function() {
      def('restaurants', function() { 
      return [
        restaurantFixture("A", [Michael]),
        restaurantFixture("B", [Michael, Mike]),
        restaurantFixture("C")
      ] 
      });
    
      it('sorts the restaurant with fewer mehs above the other', function() {
        assert.equal(getOrderString(sortedRestaurants), "C,A,B");
      });
    });
  });
  
  describe('one restaurant has nos, but another restaurant has more', function() {
    describe("users are unique across preferences", function() {
      def('restaurants', function() { 
      return [
        restaurantFixture("A", null, [Michael]),
        restaurantFixture("B", null, [Morgan, Mike]),
        restaurantFixture("C")
      ] 
      });
    
      it('sorts the restaurant with fewer nos above the other', function() {
        assert.equal(getOrderString(sortedRestaurants), "C,A,B");
      });
    });
    
    describe("user is not unique across preferences", function() {
      def('restaurants', function() { 
      return [
        restaurantFixture("A", null, [Michael]),
        restaurantFixture("B", null, [Michael, Mike]),
        restaurantFixture("C")
      ] 
      });
    
      it('sorts the restaurant with fewer nos above the other', function() {
        assert.equal(getOrderString(sortedRestaurants), "C,A,B");
      });
    });
  });
  
  describe('one restaurant has a meh, one restaurant has a no, one has no preferences', function() {
    def('restaurants', function() { 
      return [
        restaurantFixture("A", [Michael]),
        restaurantFixture("B", null, [Mike]),
        restaurantFixture("C")
      ] 
    });
  
    it('ranks no preferences first, meh second, no third', function() {
      assert.equal(getOrderString(sortedRestaurants), "C,A,B");
    });
  });
});
