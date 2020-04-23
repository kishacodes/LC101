let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6
};

let dog = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5
};

let insect = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
insect["astronautID"] = Math.trunc(Math.random()*10);
dog["astronautID"] = Math.trunc(Math.random()*10);
superChimpTwo["astronautID"] = Math.trunc(Math.random()*10);

// Create an array to hold the animal objects.
let animals = [];
animals.push([superChimpOne], [salamander], [superChimpTwo], [dog], [insect]);

// Print out the relevant information about each animal.
function printAnimals(arr) {
  for (let k = 0; k < animals.length; k++) {
    return console.log(animals[k].name);
}

}
// Start an animal race!
function stepsToMove (arr) {
  return arr[i].move; 
} 
animals.forEach(function(item) {item.move = this.Math.ceil(Math.random() * 10); }); 
console.log(animals);