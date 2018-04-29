import { findWithAttr } from './arrayHelper'

export function sortRestaurantsByLunchGroupPreferences(restaurants, usersInLunchGroup) {
  if (!usersInLunchGroup || usersInLunchGroup.length === 0) {
    return restaurants.sort(compareRestaurantsByPreferences);
  }

  let restaurantsSortedByGroupPreferences = _getRestaurantsWithGroupPreferencesOnly(restaurants,
      usersInLunchGroup).sort(compareRestaurantsByPreferences);
  let sortedRestaurantNames = restaurantsSortedByGroupPreferences.map((restaurant) => {
    return restaurant.name;
  });

  let sortedRestaurants = [];
  restaurants.map((restaurant, i) => {
    let index = sortedRestaurantNames.indexOf(restaurant.name);

    if(index === -1) {
      throw "Error while sorting restaurants for restaurant: " + restaurant.name;
    }

    sortedRestaurants[index] = restaurant;
  });

  return sortedRestaurants;
}

function _getRestaurantsWithGroupPreferencesOnly(restaurants, usersInLunchGroup) {
  let restaurantsWithGroupPreferencesOnly = [];

  for (let restaurant of restaurants) {
    let preferences = [[],[]];

    [restaurant.mehs, restaurant.nos].map((prefArray, i) => {
      for (let pref of prefArray) {
        if (findWithAttr(usersInLunchGroup, "name", pref.name) !== -1) {
          preferences[i].push(pref.name);
        }
      }
    });

    restaurantsWithGroupPreferencesOnly.push({
      name: restaurant.name,
      mehs: preferences[0],
      nos: preferences[1]
    });
  }

  return restaurantsWithGroupPreferencesOnly;
}

function compareRestaurantsByPreferences(a, b) {
  if (a.nos.length < b.nos.length) {
    return -1;
  }
  else if (a.nos.length === b.nos.length) {
    if (a.mehs.length < b.mehs.length) {
      return -1;
    }
    else if (a.mehs.length === b.mehs.length) {
      return 0;
    }
  }
  return 1;
}