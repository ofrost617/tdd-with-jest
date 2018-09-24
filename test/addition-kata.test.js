const add = require('../src/addition-kata');

test('should return 0 if an empty string is provided', () => {
    expect(add('')).toBe(0);
});

test('should return the number for a single number', () => {
    expect(add('1')).toBe(1);
});

test('should return added numbers for multiple numbers', () => {
    expect(add('1, 2, 3')).toBe(6);
});
