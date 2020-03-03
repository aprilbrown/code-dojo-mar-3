function biggestNumber(input) {
  if (input.length === 0) {
    return "";
  }

  let bigNumber = 0;

  input.forEach(value => {
    if (bigNumber < value) {
      bigNumber = value;
    }
  });

  return bigNumber;
}

function getIndexOfValue(value, array) {
  let arrayIndex = null;
  let arrayLength = array.length;

  for (let i = 0; i <= arrayLength; i++) {
    if (array[i] === value) {
      arrayIndex = i;
    }
  }

  return arrayIndex;
}

module.exports = {
  biggestNumber,
  getIndexOfValue
};
