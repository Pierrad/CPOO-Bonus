const Transport = require('./Transport');

const transport = new Transport('12345', '32', 'Pas de règle.', 'Paris', 'Marseille');

// Test function toString
test('toString => ', () => {
  expect(transport.toString()).toBe('Trajet n°12345 de Paris à Marseille. Place 32. Pas de règle.');
})

// Test all setters with getters (not really needed, but good to have)

// Test setters for number property
test('setNumber => ', () => {
  transport.setNumber('987')
  expect('987').toBe(transport.getNumber());
})

// Test setters for seat property
test('setSeat => ', () => {
  transport.setSeat('54E')
  expect('54E').toBe(transport.getSeat());
})

// Test setters for rule property
test('setRule => ', () => {
  transport.setRule('Les bagages seront oublié')
  expect('Les bagages seront oublié').toBe(transport.getRule());
})

// Test setters for begin property
test('setBegin => ', () => {
  transport.setBegin('Cannes')
  expect('Cannes').toBe(transport.getBegin());
})

// Test setters for end property
test('setEnd => ', () => {
  transport.setEnd('Tours')
  expect('Tours').toBe(transport.getEnd());
})