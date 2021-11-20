const Bus = require('./Bus');

const bus = new Bus(null, null, null, 'Paris', 'Lyon');

// Test function toString
test('toString => ', () => {
  expect(bus.toString()).toBe('Prenez le bus de Paris à Lyon. Pas d\'attribution de sièges.');
})