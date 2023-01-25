const reverseString = require('./task2');

test('reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('hello world')).toBe('dlrow olleh');
})