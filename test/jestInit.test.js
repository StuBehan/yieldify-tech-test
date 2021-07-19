const sum = require('../src/jestInit');

test('adds a to b', () => {
  expect(sum(1, 2)).toBe(3);
});