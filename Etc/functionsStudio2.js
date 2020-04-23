function myFunction(str) {
  if (str.length <= 3) {
    shortStr = str.slice(-1);
    console.log(`We put the ${shortStr} in ${str}. `);
     
  } else {
    longStr = str.slice(0,3);
    console.log(`We put the ${longStr} in ${str}. `);
  }
} 
myFunction("ILY");

//Area 
function rectangleArea(length, width) {
  if (typeof width === typeof length) {
    return area = length * width;
  } else {
  return area = length * length;
  }
}
console.log(rectangleArea(2));