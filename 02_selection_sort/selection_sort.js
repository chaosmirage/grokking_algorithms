const input = [5, 20, 1 , 13, 4, 555, 2];

const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for(let i = 0; i < arr.length; i++ ) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

const selectionSort = (arr) => {
  let result = [];
  const length = arr.length;

  for(let i = 0; i < length; i++) {
    const smallestIndex = findSmallest(arr);
    result = [...result, ...arr.splice(smallestIndex, 1)];
  }

  return result;
}

selectionSort(input);
