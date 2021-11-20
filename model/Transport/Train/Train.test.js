const Train = require('./Train');

const train = new Train('234563', '54', null, 'Paris', 'Marseille');

// Test function toString
test('toString => ', () => {
  expect(train.toString()).toBe('Prenez le train 234563 de Paris à Marseille. Asseyez vous à la place 54.');
})