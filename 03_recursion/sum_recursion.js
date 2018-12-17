const sum = (arr, max = 0) => {
  const [ head, ...tail ] = arr;
  if (arr.length === 0) {
    return max;
  }

  const newMax = head > max ? head : max;
  return sum(tail, newMax);
}

sum([1, 2, 3, 4, 5, -1, 300, 20, 13])
