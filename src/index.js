
exports.min = function min (array = []) {
  if (validateArray(array)) {
    return Math.min(...array);
  }

  return 0;
};

exports.max = function max (array = []) {
  if (validateArray(array)) {
    return Math.max(...array);
  }

  return 0;
};

exports.avg = function avg (array = []) {
  if (validateArray(array)) {
    const sum = array.reduce((sum, currentValue) => sum + currentValue, 0);
    return sum / array.length;
  }

  return 0;
};

function validateArray(array) {
  return array.length !== 0;
}
