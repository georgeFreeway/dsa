// //given an array of integers, sort the array.
function bubbleSort(array) {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      //compared i to i + 1
      if (array[i] > array[i + 1]) {
        let temporalElement = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temporalElement;
        isSwapped = true;
      }
    }
  } while (isSwapped);
}

const array1 = [0, 2, 3, 1, 5, 4, 9, 6];
bubbleSort(array1);
console.log(array1);
// //Big O - O(n^2)

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let sortedElementIndex = i - 1;
    let elementToInsert = array[i];

    while (
      sortedElementIndex >= 0 &&
      array[sortedElementIndex] > elementToInsert
    ) {
      array[sortedElementIndex + 1] = array[sortedElementIndex];
      sortedElementIndex = sortedElementIndex - 1;
    }

    array[sortedElementIndex + 1] = elementToInsert;
  }
}

const array2 = [2, 3, 1, 5, 4, 9, 6];
insertionSort(array2);
console.log(array2);
// //Big O - O(n^2)
