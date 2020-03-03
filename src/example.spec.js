const { biggestNumber, getIndexOfValue } = require("./index.js");

test("an empty array does not have a big number", () => {
  let result = biggestNumber([]);

  expect(result).toEqual("");
});

test("a single number array returns the number", () => {
  let result = biggestNumber([1]);

  expect(result).toEqual(1);
});

test("an array of 2 numbers returns the bigger number", () => {
  let result = biggestNumber([1, 2]);

  expect(result).toEqual(2);
});

test("an array of 10 numbers returns the bigger number", () => {
  let result = biggestNumber([1, 2, 3, 5, 6, 7, 4, 5, 2]);

  expect(result).toEqual(7);
});

test("it returns null when array is empty", () => {
  let value = 5;
  let array = [];
  let result = getIndexOfValue(value, array);

  expect(result).toEqual(null);
});

test("test it gets the key of an array of the provided value", () => {
  let value = 5;
  let array = [1, 3, 5, 4, 2];
  let result = getIndexOfValue(value, array);

  expect(result).toEqual(2);
});
