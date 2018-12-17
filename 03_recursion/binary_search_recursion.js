function binarySearchRecursion(arr, item, result = null) {
  if (result) {
    return result;
  }

  if (arr.length === 0 || arr.length === 1) {
    return arr[0] === item ? item : result;
  }

  const sideToSearchTypes = [
    { name: 'right', handler: (guess) => guess < item},
    { name: 'left', handler: (guess) => guess > item},
    { name: 'none', handler: (guess) => guess === item},
  ];

  const mid = Math.round(arr.length / 2);
  const { name } = sideToSearchTypes.find(({ handler }) => handler(arr[mid]));
  const newResult = name === 'none' ? mid : null;
  const newArr = name === 'left' ? arr.slice(0, mid) : arr.slice(mid);
  return binarySearchRecursion(newArr, item, newResult);
}

module.exports = binarySearchRecursion;
