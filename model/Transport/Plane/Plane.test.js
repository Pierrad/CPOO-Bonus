const Plane = require('./Plane');

const plane = new Plane('234', '34E', 'Dépose des bagages au guichet 344.', 'Paris', 'Nice', '2F');

// Test function toString
test('toString => ', () => {
  expect(plane.toString()).toBe('De Paris, prenez le vol 234 à destination de Nice. Porte 2F, siège 34E. Dépose des bagages au guichet 344.');
})

// Test setter and getter for gate property
test('setGate => ', () => {
  plane.setGate('5E')
  expect('5E').toBe(plane.getGate());
})