let arr = ["hello", "world", 123, "orange"];

arr.reverse();

//Reverse Characters
function reverseCharacters(str) {
  if (typeof str === "string") {
    return str.split("").reverse().join("");
} else {
  return Number(String(str).split("").reverse().join(""));
}
}

//Complete Reversal
function completeReversal(arrToChange) {
  let initialArray = [];
  for (let i = arrToChange.length-1; i >= 0; i--) {
    initialArray.push(reverseCharacters(arrToChange[i]));
  } 
  return initialArray;
}
let myArray = ["apple", "potato", "Capitalized Words"];
console.log(completeReversal(myArray));