export function restaurantFixture(name, mehs, nos) {
  return { 
    name: name || "Test Restaurant", 
    mehs: mehs || [], 
    nos: nos || []
  }
}

export function userFixture(name) {
  var username = name || "Test User";
  
  return {name: username}
}