const list = [1, 5, 10, 20, 40, 50, 55, 75, 88];

const binarySearch = (list, target) => {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    const center = Math.round((left + right) / 2);

    if (list[center] === target) {
      return center;
    }

    if (list[center] < target) {
      left = center + 1;
    } else {
      right = center - 1;
    }
  }

  return null;
};

binarySearch(list, 1);
