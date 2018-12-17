function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pillar = arr[0];
  let smallest = [];
  let largest = [];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < pillar) {
      smallest = [...smallest, arr[i]];
    }

    if (arr[i] > pillar) {
      largest = [...largest, arr[i]];
    }
  }

  return [...quickSort(smallest), pillar, ...quickSort(largest)];
}

module.exports = quickSort;
