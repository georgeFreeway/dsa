//find the index of t in a sorted array of 'n' elements, return -1 if t does not exist
function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === array[middleIndex]) {
      return middleIndex;
    }

    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

//Big O = O(log(n))

console.log(binarySearch([44, 50, 67, 90, 102], 50));
console.log(binarySearch([44, 50, 67, 90, 102], 67));
console.log(binarySearch([44, 50, 67, 90, 102], 70));
