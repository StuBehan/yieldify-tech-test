const sum = require('../public/src/jasmine')

describe('Jasmine Test', () => {
  it('adds a to b', () => {
    expect(sum(1, 2)).toEqual(3);
  });
})
