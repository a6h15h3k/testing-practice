let sum = require('./sum');

test("adds 1 + 2 to equal to 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 3 + 1 to equal to 4", () => {
  expect(sum(1, 3)).toBe(4);
});