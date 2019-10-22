/* eslint-disable no-unused-vars */
let comparisonCounter = 0;
let checkObj = {
  compare: function () {
    return
  },
  swap: function () {
    return
  }
}

let count = 0;

function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        checkObj.swap();
      }
      checkObj.compare();
    }
  }
  return arr;
}
