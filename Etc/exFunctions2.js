//1. Write a makeDownwardStairs(height) function
     //using the makeLine function


function makeLine(size) {
  let hashLine = " ";
  for(let x = 0; x < size; x++) {
    hashLine = hashLine + "#";
  }
  return hashLine;
}

function makeDownwardStairs(height){
  let k = 1
  while (k <= height) {
    console.log(makeLine(k));
    k = k+1;
  } 
  return 
}

//2. Write a makeSpaceLine(numSpaces, numChar) function
//   that returns a line with a specified number of spaces,
//   followed by specified number of #, followed by
//   numSpaces
function makeSpaceLine(numSpaces, numChars) {
  let hasSpaces = "";
  let hasChars = "";
  let newSpaceLine = "";

  for (spaces = 0; spaces < numSpaces; spaces++){
    hasSpaces = hasSpaces + " ";
  }

  for (chars = 0; chars < numChars; chars++) {
    hasChars = `${hasChars}#`; 
  }
  newSpaceLine = newSpaceLine.concat(hasSpaces + hasChars + hasSpaces,`\n`);
  return newSpaceLine;
}

//3. Make an makeIsoscelesTriangle(height) function.
//   numSpaces = height - i - 1;
//   numChar = height * 2 + 1;

function makeIsoscelesTriangle(height) {
  let lines = 0;
  let madeIsoscelesTriangle = "";
  let triangleLines = "";
  for (let lines = 0; lines < height; lines++) {
    triangleLines = triangleLines + makeSpaceLine(height - lines - 1, lines * 2 + 1);
    lines = lines + 1;
    } 
    return triangleLines;  
  }  
    
makeIsoscelesTriangle(5); 