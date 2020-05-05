let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(numbers) {
  let minVal = numbers[0];
  for (let num of numbers) {
    if (num < minVal) {
      minVal = num;
    }
  }
  return minVal;
} 
let indexOfSmallNum;
let sortedArray = [];

function sortArray(arr) { 
  while (arr.length > 0) {
    sortedArray.push(findMinValue(arr));
    indexOfSmallNum = arr.indexOf(findMinValue(arr));
    arr.splice(indexOfSmallNum,1);
  }
  return sortedArray;
} 
let decreasingArray = [];
let increasingArray = [];
let s = function(arr1){
  increasingArray = sortArray(arr1);
  console.log("Increasing Array is: " + increasingArray);
  decreasingArray = increasingArray.reverse();
  console.log(`Decreasing Array is: ${decreasingArray}`);
  return;
};
console.log(s(nums3));