const sum = require('../src/jasmine')

describe('Jasmine Test', () => {
  it('adds a to b', () => {
    expect(sum(1, 2)).toBe(3);
  });
})
