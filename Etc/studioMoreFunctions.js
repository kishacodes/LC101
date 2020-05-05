// Code findMinValue here:
//Sample arrays for testing:
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

//console.log(` The minimum value in ${nums2} is ${findMinValue(nums2)}`);
// Code sortArray here:
// let sortArray = [];
// while (item in )
console.log("The original array is " + nums2);
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


console.log("The sorted array is: " + sortedArray);


console.log("The original array is now: " + nums2);
console.log(sortArray(nums2));


