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

function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target < array[middleIndex]) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    return search(array, target, rightIndex, middleIndex + 1);
  }
}

//Big O = O(logn)
