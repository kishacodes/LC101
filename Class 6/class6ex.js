// function MyFunction(arr1) {
  
// }

let arr = ['Elocution', 21, 'Clean teeth', 100, '', true];

let practice = function(arr) {
  if (typeof arr === "number") {
      arr = arr * 3;
      return arr;
    }
  if (typeof arr === typeof "string") {
      return "ARRR!";
    }
  if (typeof arr !== Number && typeof arr !== typeof "string"){
      return arr;
    }
  };

let newArray = arr.map(practice);
console.log(arr);
console.log(newArray);