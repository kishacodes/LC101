  //1. Write a function makeLine(size) that creates an array of # by looping and 
  //adding the size amount of arrays
 // makes the hashArray into a string w/out the , and spaces
}

//2. Write a function makeSquare that returns a size by size square of hashes
//    Must use makeLine function
function makeSquare(size) {
  let hasNewLineStr;
  let newLine = '\n';
  let newMakeLine = makeLine(size); //convert makeLine funtion into a string
  return hasNewLineStr = newLine.concat(newMakeLine).repeat(size).trim(); 
}
//console.log(makeSquare(3));

//3. Write a function makeRectangle(width, height) 
//   use makeLine function

function makeRectangle(width, height) {
  let newLine = '\n';
  let newMakeLine = makeLine(width);
  return makeLineHeight = newLine.concat(newMakeLine).repeat(height).trim();
}
console.log(makeRectangle(5,3));