export function sortRestaurants(restaurants) {
  return restaurants.sort(compareRestaurantsByPreferences);
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