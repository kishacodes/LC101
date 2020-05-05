function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

//1.
let parrotFood = function(level) {
  let stolenFuel = 0;
  while (checkFuel(fuelLevel == 'green') && fuelLevel > 110000) {
  stolenFuel = fuelLevel - (fuelLevel/10);
  fuelLevel--;
  stolenFuel++;
}
console.log(stolenFuel); 
return stolenFuel;
};

console.log(parrotFood(fuelLevel));
console.log("Fuel level: " + checkFuel(fuelLevel));

let deckMops = function(arr){
  let stolenGoods = ["dilithium", "gold", "AE-35 unit", "Legos", "TI-89 calculator"];
  let indexOfItem = [];
  let newArray = [];
  for (let item of cargoHold) {
    if (stolenGoods.includes(item)) {
      indexOfItem.push(cargoHold.indexOf(item));
    }
  for (let index of indexOfItem) {
    newArray.push(cargoHold[index]);
    cargoHold[index] - "garbage";
  }
  return newArray;
  }
}
deckMops(cargoHold);