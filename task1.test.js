const stringLength = require('./task1');

test('string length', () => {
  expect(stringLength('hello')).toBe(5);
  expect(stringLength('hello world')).toBe('String length must be between 1 and 10');
  expect(stringLength('')).toBe('String length must be between 1 and 10');
})